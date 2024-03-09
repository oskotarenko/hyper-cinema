"use server"

import { database, } from "@/config/database.config";

export async function getMoviesByQuery(search: string) {
  const movies = await database.movie.findMany({
    where: {
      status: "Released",
      OR: [
        { title: { contains: search, mode: "insensitive" }, },
        { genres: { search, mode: "insensitive" } },
        { actors: { search, mode: "insensitive" } },
        { description: { search, mode: "insensitive" } },
        { studio: { search, mode: "insensitive" } },
        { director: { search, mode: "insensitive" } }
      ],
    }
  });

  return movies
}