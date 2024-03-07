"use server"

import { revalidatePath, } from "next/cache";

import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

import { getMovieById, } from "./get-movie-by-id";

export async function updateMovieStatus(id: string): Promise<ActionResponse> {
  const movie = await getMovieById(id);
  if (!movie) return response(null, "Movie not found");

  await database.movie.update({
    where: { id },
    data: { status: movie.status === "Released" ? "Suspended" : "Released" }
  });

  revalidatePath("/")
  return response("Movie status updated", null);
}