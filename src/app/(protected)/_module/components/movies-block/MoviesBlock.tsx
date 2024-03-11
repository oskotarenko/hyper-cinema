import { Movie } from "@prisma/client";

import { MovieCard } from "../movie-card/MovieCard";

type Props = {
  movies: Movie[];
};
export default function MoviesBlock({ movies }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 lg:gap-4">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
