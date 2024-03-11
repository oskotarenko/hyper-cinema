"use client";

import clsx from "clsx";

import { Table, TableColumn } from "@/shared/ui/table";

import { MovieStatusButton } from "./MovieStatusButton";

import type { Movie } from "@prisma/client";
type Props = {
  movies: Movie[];
};

export function MoviesTable({ movies }: Props) {
  return (
    <Table
      title="All Movies"
      data={movies}
      emptyMessage="No movies found. Please, create one."
      classname="desktop-sm:w-full"
    >
      <TableColumn title="ID">
        {movies.map((movie) => (
          <p
            onClick={() => navigator.clipboard.writeText(movie.id)}
            key={movie.id}
            className={clsx(
              movie.status === "Released" ? "text-primary hover:text-primary/70" : "text-red-500 hover:text-red-500/70",
              "font-bold cursor-pointer hover-colors",
            )}
          >
            {movie.id}
          </p>
        ))}
      </TableColumn>
      <TableColumn title="Title">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </TableColumn>
      <TableColumn title="Year">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.year}</p>
        ))}
      </TableColumn>
      <TableColumn title="Country">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.country}</p>
        ))}
      </TableColumn>
      <TableColumn title="Production Studio">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.studio}</p>
        ))}
      </TableColumn>
      <TableColumn title="Age">
        {movies.map((movie) => (
          <p key={movie.id}>{movie.restrictions}+</p>
        ))}
      </TableColumn>
      <TableColumn title="Status">
        {movies.map((movie) => (
          <p key={movie.id} className={clsx(movie.status === "Released" ? "text-primary" : "text-red-500")}>
            {movie.status}
          </p>
        ))}
      </TableColumn>
      <TableColumn title="Manage">
        {movies.map((movie) => (
          <MovieStatusButton movie={movie} key={movie.id} />
        ))}
      </TableColumn>
    </Table>
  );
}
