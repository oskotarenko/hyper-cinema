"use server"

import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

/**
 * @used_in app/(protected)/schedule
 */
export async function getClosestSchedule(): Promise<Schedule[]> {
  return await database.schedule.findMany({ take: 30, orderBy: { startTime: "asc" } });
}
