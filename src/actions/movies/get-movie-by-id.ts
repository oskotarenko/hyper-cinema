"use server"
import { database, } from "@/config/database.config";
import { Movie, } from "@prisma/client";

export async function getMovieById(id: string): Promise<Movie> {
  return database.movie.findUnique({ where: { id } });
}