"use server"

import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

/**
 * @used_in actions/tickets/buy-ticket.ts | actions/tickets/refund-ticket.ts | Ticket.tsx | app/(protected)/scheudle/[scheduleId]
 */
export async function getScheduleById(id: string, noCompelted = false): Promise<Schedule> {
  return await database.schedule.findUnique({
    where: {
      id,
      status: noCompelted ? "Sale" : "Sale" || "Completed" || "Canceled"
    }
  });
}
