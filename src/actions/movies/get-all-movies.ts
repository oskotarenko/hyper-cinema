"use server"

import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

export async function getAllMovies(): Promise<Movie[]> {
  return await database.movie.findMany({ orderBy: { createdAt: "desc" } });
}