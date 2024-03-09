"use server";

import { Seat, } from "@/app/(protected)/schedule/[scheduleId]/_module/types/Seat";
import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

export async function bookSeatsInHall(schedule: Schedule, seats: Seat[]): Promise<boolean> {
  const scheduleSeats: boolean[][] = JSON.parse(schedule.seats)

  for (const seat of seats) {
    const isValidRow = scheduleSeats.length >= seat.row && seat.row >= 0;
    const isValidCol = scheduleSeats[seat.row].length >= seat.col && seat.col >= 0;
    if (!isValidRow || !isValidCol) return false;

    if (scheduleSeats[seat.row][seat.col] === true) {
      return false;
    }

    scheduleSeats[seat.row][seat.col] = true;
  }

  await database.schedule.update({
    where: { id: schedule.id },
    data: { seats: JSON.stringify(scheduleSeats) }
  })

  return true;
}