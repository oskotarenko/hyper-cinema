"use server"

import { revalidatePath, } from "next/cache";

import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

import { updateScheduleStatus, } from "../schedule/update-schedule-status";
import { getMovieById, } from "./get-movie-by-id";

/**
 * @user_in app/(protected)/movies/{process.env.MOVIES_ADMIN_URL}
 */
export async function updateMovieStatus(movieId: string): Promise<ActionResponse> {
  const movie = await getMovieById(movieId);
  if (!movie) return response(null, "Movie not found");

  if (movie.status === "Released") {
    for (const schedule of movie.schedules) {
      await updateScheduleStatus(schedule.id, 'Canceled')
    }
    await database.movie.update({ where: { id: movieId }, data: { status: "Suspended" } })
  }
  else
    await database.movie.update({ where: { id: movieId }, data: { status: "Released" } })


  revalidatePath("/")
  return response("Movie status updated", null);
}