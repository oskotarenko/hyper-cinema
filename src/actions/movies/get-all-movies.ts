"use server";

import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

/**
 * @used_in app/(protected)/movies/{process.env.MOVIES_ADMIN_URL}
 */
export async function getAllMovies(): Promise<Movie[]> {
  return await database.movie.findMany({ orderBy: { createdAt: "desc" } });
}