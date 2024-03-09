"use server"

import { database, } from "@/config/database.config";
import { Schedule, } from "@prisma/client";

/**
 * @used_in actions/tickets/refund-ticket.ts
 */
export async function unbookSeatInHall(schedule: Schedule, row: number, col: number): Promise<boolean> {
  const scheduleSeats: boolean[][] = JSON.parse(schedule.seats);

  const isValidRow = scheduleSeats.length >= row && row >= 0;
  const isValidCol = scheduleSeats[row].length >= col && col >= 0;
  if (!isValidRow || !isValidCol) return false;

  if (scheduleSeats[row][col] === false) return false;
  scheduleSeats[row][col] = false;

  await database.schedule.update({ where: { id: schedule.id }, data: { seats: JSON.stringify(scheduleSeats) } });
  return true;
}
