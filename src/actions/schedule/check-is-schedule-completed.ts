"use server"

import { Schedule, } from "@prisma/client";

import { updateScheduleStatus, } from "./update-schedule-status";

/**
 * ! Use only in cron jobs !
 * @used_in api/cron/check-schedule-expired
 */
export async function checkIsScheduleCompleted(now: Date, schedule: Schedule): Promise<void> {
  if (now > schedule.startTime) {
    await updateScheduleStatus(schedule.id, "Completed");
  }

  return;
}