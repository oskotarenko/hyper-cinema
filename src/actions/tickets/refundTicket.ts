"use server"
import { revalidatePath, } from "next/cache";

import { auth, } from "@/config/auth.config";
import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

import { getScheduleById, } from "../schedule/get-schedule-by-id";
import { unbookSeatInHall, } from "../schedule/unbook-seat-in-hall";
import { getTicketById, } from "./get-ticket-by-id";

export async function refundTicket(ticketId: string): Promise<ActionResponse> {
  const ticket = await getTicketById(ticketId);
  if (!ticket) return response(null, "Ticket not found");

  const schedule = await getScheduleById(ticket.scheduleId);

  const session = await auth();
  if (session.user.id !== ticket.ownerId || ticket.status !== "Actual") return response(null, "You can’t refund this ticket");

  const isSeatUnbooked = await unbookSeatInHall(schedule, ticket.row, ticket.col);
  if (!isSeatUnbooked) return response(null, "Something went wrong during unbooking seat");

  await database.user.update({ where: { id: ticket.ownerId }, data: { balance: { increment: schedule.price } } });
  await database.ticket.update({ where: { id: ticket.id }, data: { status: "Refunded" } });

  revalidatePath("/");
  return response("Ticket refunded", null);
}