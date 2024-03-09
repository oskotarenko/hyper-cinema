"use server"

import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

// TODO: rename this to getAllSchedule
export async function getAllSchedules(): Promise<Schedule[]> {
  return await database.schedule.findMany();
}