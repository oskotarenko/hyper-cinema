"use server"
import { revalidatePath, } from "next/cache";

import { uploadFile, } from "@/actions/file/upload-file";
import {
  CreateMovieScheme,
} from "@/app/(protected)/movies/TUmAZ18KnFN1tOo10WPflfxR2jBFJcW1id7JNQ48lzc/_module/schemes/create-movie";
import { database, } from "@/config/database.config";
import { handleValidationError, } from "@/shared/services/handle-validation.service";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

/**

 * @used_in CreateMovieForm.tsx
 */
export async function createMovie(formData: FormData): Promise<ActionResponse> {
  const validated = CreateMovieScheme.safeParse({
    title: formData.get("title"),
    trailer: formData.get("trailer"),
    genres: formData.get("genres"),
    actors: formData.get("actors"),
    description: formData.get("description"),
    year: Number(formData.get("year")),
    duration: Number(formData.get("duration")),
    country: formData.get("country"),
    studio: formData.get("studio"),
    director: formData.get("director"),
    restrictions: Number(formData.get("restrictions"))
  });

  if (!validated.success) {
    return "error" in validated
      ? handleValidationError(validated)
      : response(null, "Invalid fields");
  }

  const poster = formData.get("poster") as File;
  if (!poster.size) return response(null, "Poster not provided");

  const { url } = await uploadFile(poster)
  if (!url) return response(null, "Something went wrong during saving poster");

  const { title, trailer, genres, actors, description, year, duration, country, studio, director, restrictions } = validated.data;

  await database.movie.create({
    data: {
      title, trailer, genres,
      actors, description, year,
      duration, country, studio,
      director, restrictions,
      poster: url
    }
  })

  revalidatePath("/", "layout");

  return response("Movie created", null);
}
