"use server";

import { database, } from "@/config/database.config";
import { Ticket, } from "@prisma/client";

export async function getTicketById(ticketId: string): Promise<Ticket> {
  return await database.ticket.findUnique({ where: { id: ticketId } });
}