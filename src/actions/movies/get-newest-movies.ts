"use server";

import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

export async function getNewestMovies(qty?: number): Promise<Movie[]> {
  return await database.movie.findMany({ where: { status: "Released" }, take: qty, orderBy: { createdAt: "desc" } })
}