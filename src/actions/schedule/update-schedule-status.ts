"use server";
import { revalidatePath, } from "next/cache";

import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";

import { ActionResponse, } from "../../types/action-response";

export async function updateScheduleStatus(id: string): Promise<ActionResponse> {
  const schedule = await database.schedule.findUnique({ where: { id } });
  if (!schedule) return response(null, "Schedule not found");
  if (schedule.status === "Completed") return response(null, "Cannot update completed schedule");

  await database.schedule.update({
    where: { id: schedule.id },
    data: { status: schedule.status === "Sale" ? "Canceled" : "Sale" }
  });

  revalidatePath("/");
  return response("Schedule status updated", null);
}