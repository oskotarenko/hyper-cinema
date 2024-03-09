"use server"

import { database, } from "@/config/database.config";

// TODO: rename this to getClosestSchedule 
export async function getClosestSchedules() {
  return await database.schedule.findMany({ take: 30, orderBy: { startTime: "asc" } });
}