"use server";

import { database, } from "@/config/database.config";
import { Ticket, } from "@prisma/client";

/**
 * @used_in actions/tickets/refund-ticket.ts
 */
export async function getTicketById(ticketId: string): Promise<Ticket> {
  return await database.ticket.findUnique({ where: { id: ticketId } });
}