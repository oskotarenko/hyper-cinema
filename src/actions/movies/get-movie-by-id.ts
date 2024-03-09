"use server"
import { database, } from "@/config/database.config";
import { Movie, Schedule, } from "@prisma/client";

export async function getMovieById(id: string): Promise<Movie & { schedules: Schedule[] }> {
  const movie = await database.movie.findUnique({ where: { id }, include: { schedules: true } });
  if (!movie) throw new Error("Movie not found");
  return movie;
}