"use server"

import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

export async function getAllSchedules(): Promise<Schedule[]> {
  return await database.schedule.findMany();
}