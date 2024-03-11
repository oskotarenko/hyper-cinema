import MoviesBlock from "@/app/(protected)/_module/components/movies-block/MoviesBlock";
import { Movie } from "@prisma/client";

import { MoviesBySearch } from "./MoviesBySearch";

type Props = {
  movies: Movie[];
  search?: string;
};
export function Movies({ movies, search }: Props) {
  return (
    <>
      {search ? (
        <MoviesBySearch search={search} />
      ) : (
        <>
          <h1 className="pb-2">Released Movies</h1>
          <MoviesBlock movies={movies} />
        </>
      )}
    </>
  );
}
