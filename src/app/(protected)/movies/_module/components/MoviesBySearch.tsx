import { getMoviesByQuery } from "@/actions/movies/get-movies-by-query";
import { NothingFound } from "@/app/(protected)/_module/components/nothing-found/NothingFound";
import MoviesBlock from "@/app/_module/components/MoviesBlock";

type Props = {
  search: string;
};

export async function MoviesBySearch({ search }: Props) {
  const movies = await getMoviesByQuery(search);
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      {movies.length ? (
        <div>
          <h1 className="pb-2">Movies found by “{search}”</h1>
          <MoviesBlock movies={movies} />
        </div>
      ) : (
        <NothingFound title={`Nothing found for “${search}”`} message="Try looking for something else." />
      )}
    </div>
  );
}
