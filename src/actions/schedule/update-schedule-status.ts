"use server";
import { revalidatePath, } from "next/cache";

import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";
import { ScheduleStatus, } from "@prisma/client";

import { ActionResponse, } from "../../types/action-response";
import { refundTicket, } from "../tickets/refund-ticket";
import { setTicketExpired, } from "../tickets/set-ticket-expired";

/**
 * @used_in ScheduleStatusButton.tsx | actions/schedule/check-is-schedule-completed.ts | actions/movies/update-movie-status.ts
 */
export async function updateScheduleStatus(scheduleId: string, status: ScheduleStatus): Promise<ActionResponse> {
  const schedule = await database.schedule.findUnique({ where: { id: scheduleId }, include: { tikets: true } });
  if (!schedule) return response(null, "Schedule not found");
  if (schedule.status === "Completed") return response(null, "Cannot update completed schedule");

  if (status === "Sale")
    return response(null, "It is’nt possible to restore a canceled or compleded session")

  else if (status === "Canceled") {
    for (const ticket of schedule.tikets) {
      await refundTicket(ticket.id, true);
    }
    await database.schedule.update({ where: { id: schedule.id }, data: { status: "Canceled" } });
  }

  else if (status === "Completed") {
    for (const ticket of schedule.tikets) {
      await setTicketExpired(ticket.id);
    }
    await database.schedule.update({ where: { id: schedule.id }, data: { status: "Completed" } })
  }

  revalidatePath("/");
  return response("Schedule status updated", null);
}