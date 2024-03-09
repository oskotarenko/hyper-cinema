"use server"

import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

/**
 * @used_in app/(protected)/schedule/{process.env.SCHEDULES_ADMIN_URL}
 */
export async function getFullSchedule(): Promise<Schedule[]> {
  return await database.schedule.findMany();
}
