"use server";

import { revalidatePath, } from "next/cache";

import { database, } from "@/config/database.config";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

import {
  generateScheduleScheme as scheme, hallsScheme,
} from "../../app/(protected)/schedule/8xEBbd39tLdRqqdnVCxMMv95SatGzqd9P3Mddn7IUZE/_module/constants/constants";
import { getMoviesSorted, } from "../movies/get-movies-sorted";

/**
 * @used_in GenerateScheduleButton.tsx
 */
export async function generateSchedule(): Promise<ActionResponse> {
  const now = new Date();
  const today = now.getTime()
    - now.getHours() * 60 * 60 * 1000
    - now.getMinutes() * 60 * 1000
    - now.getSeconds() * 1000;

  const movies = await getMoviesSorted();

  for (let day = 0; day < scheme.length; day++) {
    for (let item = 0; item < scheme[day].length; item++) {
      const random = Math.floor(Math.random() * movies.length);
      const movie = movies[random];

      const startTime = new Date(
        today
        + ((day + 1) * 24 * 60 * 60 * 1000)
        + scheme[day][item].startHour * 60 * 60 * 1000);
      const endTime = new Date(startTime.getTime() + movie.duration * 60 * 1000);

      // gen seats
      const { rows, seats } = hallsScheme[scheme[day][item].hall - 1];
      const seatsScheme: boolean[][] = [];

      for (let row = 0; row < rows; row++)
        seatsScheme.push(new Array(seats[row]).fill(false));

      await database.schedule.create({
        data: {
          movieId: movie.id,
          hall: scheme[day][item].hall,
          price: scheme[day][item].price,
          startTime,
          endTime,
          seats: JSON.stringify(seatsScheme)
        }
      })
    }
  }

  revalidatePath("/")
  return response("Schedules created", null);
}
