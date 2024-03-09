"use server";

import { revalidatePath, } from "next/cache";

import { Seat, } from "@/app/(protected)/schedule/[scheduleId]/_module/types/Seat";
import { auth, } from "@/config/auth.config";
import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

import { bookSeatsInHall, } from "../schedule/book-seats-in-hall";
import { getScheduleById, } from "../schedule/get-schedule-by-id";
import { getUserById, } from "../user/get-user-by-id";

/**
 * @used_in PickedSeats.tsx
 */
export async function buyTickets(scheduleId: string, seats: Seat[]): Promise<ActionResponse> {
  const session = await auth();
  if (!session || !session.user.id) return response(null, "User not found");

  const owner = await getUserById(session.user.id);
  if (!owner) return response(null, "User not found");

  const schedule = await getScheduleById(scheduleId);
  if (!schedule) return response(null, "Session not found");

  const isSeatsBooked = await bookSeatsInHall(schedule, seats);
  if (!isSeatsBooked) return response(null, "Some seat is invalid seats or already booked");

  if (owner.balance < schedule.price * seats.length)
    return response(null, "Insufficient balance");

  for (const seat of seats) {
    await database.ticket.create({
      data: {
        ownerId: owner.id,
        scheduleId: scheduleId,
        row: seat.row,
        col: seat.col,
      }
    })
  }

  await database.user.update({ where: { id: owner.id }, data: { balance: { decrement: schedule.price * seats.length } } })

  revalidatePath("/");
  return response(`${seats.length > 1 ? "Tickets" : "Ticket"} purchased`, null);
}
