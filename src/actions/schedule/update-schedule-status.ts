"use server";
import { revalidatePath, } from "next/cache";

import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";

import { ActionResponse, } from "../../types/action-response";

/**
 * @used_in ScheduleStatusButton.tsx
 */
export async function updateScheduleStatus(scheduleId: string): Promise<ActionResponse> {
  const schedule = await database.schedule.findUnique({ where: { id: scheduleId } });
  if (!schedule) return response(null, "Schedule not found");
  if (schedule.status === "Completed") return response(null, "Cannot update completed schedule");

  await database.schedule.update({
    where: { id: schedule.id },
    data: { status: schedule.status === "Sale" ? "Canceled" : "Sale" }
  });

  revalidatePath("/");
  return response("Schedule status updated", null);
}