"use client";

import clsx from "clsx";

import { updateMovieStatus } from "@/actions/movies/update-movie-status";
import { extractResponse } from "@/shared/services/response.service";
import { Movie } from "@prisma/client";

type Props = {
  movie: Movie;
};

export function MovieStatusButton({ movie }: Props) {
  const onClick = async () => {
    const response = await updateMovieStatus(movie.id);
    extractResponse(response);
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "block font-bold hover:text-primary hover:border-primary hover-colors",
        movie.status === "Released" && "hover:text-red-500 hover:border-red-500",
      )}
    >
      {movie.status === "Released" ? "Suspend" : "Release"}
    </button>
  );
}
