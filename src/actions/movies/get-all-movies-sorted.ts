"use server"

import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

export async function getAllMoviesSorted(): Promise<Movie[]> {
  return await database.movie.findMany({ where: { status: "Released" }, orderBy: { createdAt: "desc" } });
}