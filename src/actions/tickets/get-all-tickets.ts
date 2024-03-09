"use server";

import { database, } from "@/config/database.config";
import { Ticket, } from "@prisma/client";

/**
 * @used_in app/(protected)/tickets/{process.env.TICKETS_ADMIN_URL}
 */
export async function getAllTickets(): Promise<Ticket[]> {
  return await database.ticket.findMany();
}