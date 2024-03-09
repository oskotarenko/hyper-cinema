"use server"

import { database, } from "@/config/database.config";

export async function getScheduleById(id: string, noCompelted = false) {
  return await database.schedule.findUnique({
    where: {
      id,
      status: noCompelted ? "Sale" : "Sale" || "Completed" || "Canceled"
    }
  });
}