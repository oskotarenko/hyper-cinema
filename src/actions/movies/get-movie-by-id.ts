"use server"
import { database, } from "@/config/database.config";
import { Movie, Schedule, } from "@prisma/client";

/**
 * @used_in actions/update-movie-status.ts | Ticket.tsx | ScheduleCard.tsx | app/(protected)/movies/[movieId] | app/(protected)/schedule/[scheduleId]
 */
export async function getMovieById(movieId: string): Promise<Movie & { schedules: Schedule[] }> {
  const movie = await database.movie.findUnique({ where: { id: movieId }, include: { schedules: { where: { status: "Sale" } } } });
  if (!movie) throw new Error("Movie not found");
  return movie;
}