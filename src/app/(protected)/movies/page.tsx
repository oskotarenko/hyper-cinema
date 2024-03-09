import { getAllMoviesSorted } from "@/actions/movies/get-all-movies-sorted";

import { Movies } from "./_module/components/Movies";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function MoviesPage({ searchParams }: Props) {
  const search = searchParams.search;
  const movies = await getAllMoviesSorted();

  return <Movies movies={movies} search={Array.isArray(search) ? search[0] : search} />;
}
