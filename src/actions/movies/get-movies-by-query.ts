"use server"

import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

/**
 * @used_in MoviesBySearch.tsx
 */
export async function getMoviesByQuery(query: string): Promise<Movie[]> {
  const movies = await database.movie.findMany({
    where: {
      status: "Released",
      OR: [
        { title: { search: query, mode: "insensitive" }, },
        { genres: { search: query, mode: "insensitive" } },
        { actors: { search: query, mode: "insensitive" } },
        { studio: { search: query, mode: "insensitive" } },
        { director: { search: query, mode: "insensitive" } }
      ],
    }
  });

  return movies
}