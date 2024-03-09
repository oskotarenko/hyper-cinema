"use server"
import { database, } from "@/config/database.config";

/**
 * ! Use only in cron jobs ot server actions which used in cron-jobs !
 * @used_in actions/schedule/update-schedule-status.ts
 */
export async function setTicketExpired(ticketId: string) {
  return await database.ticket.update({ where: { id: ticketId }, data: { status: "Expired" } })
} 