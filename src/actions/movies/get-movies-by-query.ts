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
        { title: { contains: query, mode: "insensitive" }, },
        { genres: { contains: query, mode: "insensitive" } },
        { actors: { contains: query, mode: "insensitive" } },
        { studio: { contains: query, mode: "insensitive" } },
        { director: { contains: query, mode: "insensitive" } }
      ],
    }
  });

  return movies
}