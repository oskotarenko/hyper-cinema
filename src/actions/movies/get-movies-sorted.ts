"use server"

import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

/**
 * @used_in app/(protected)/movies/page.tsx | app/(protected)/movie/{process.env.MOVIES_ADMIN_URL} | 
 * actions/schedule/generate-schedule.ts
 */
export async function getMoviesSorted(quantity?: number): Promise<Movie[]> {
  return await database.movie.findMany({ where: { status: "Released" }, take: quantity, orderBy: { createdAt: "desc" } });
}