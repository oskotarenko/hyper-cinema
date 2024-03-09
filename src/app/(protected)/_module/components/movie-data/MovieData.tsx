"use client";
import Image from "next/image";
import { ReactNode } from "react";

import { Movie } from "@prisma/client";

import { MovieDataItem } from "./MovieDataItem";

type Props = {
  movie: Movie;
  actionButton: ReactNode;
};
export function MovieData({ movie, actionButton }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-2/3 mx-auto sm:w-fit sm:m-0 flex flex-col gap-4">
          <Image
            src={movie.poster}
            width={200}
            height={300}
            alt={`${movie.title} poster`}
            className="w-full rounded-xl sm:w-48"
          />
          {actionButton}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 flex-1">
          <div className="flex gap-2 items-center">
            <h1 className="w-fit">{movie.title} </h1>
            <p className="px-4 text-sm py-1 bg-primary rounded-full w-fit text-black">{movie.restrictions}+</p>
          </div>
          <p className="text-white/70">{movie.genres}</p>
          <div className="text-sm flex flex-col gap-2 w-full">
            <MovieDataItem title="Year" data={movie.year} />
            <MovieDataItem title="Duration in minutes" data={movie.duration} />
            <MovieDataItem title="Country" data={movie.country} />
            <MovieDataItem title="Main Actors" data={movie.actors} />
            <MovieDataItem title="Director" data={movie.director} />
            <MovieDataItem title="Production Studio" data={movie.studio} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Descriprion</h2>
        <p className="xl:w-3/4">{movie.description}</p>
      </div>
    </div>
  );
}
