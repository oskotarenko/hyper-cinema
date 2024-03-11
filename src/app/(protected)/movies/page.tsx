import { Metadata } from "next";
import { Suspense } from "react";

import { getMoviesSorted } from "@/actions/movies/get-movies-sorted";

import { LoadingComponent } from "../_module/components/loading/LoadingComponent";
import { Movies } from "./_module/components/Movies";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Movies | Hyper Cinema",
};

export default async function MoviesPage({ searchParams }: Props) {
  const search = searchParams.search;
  const movies = await getMoviesSorted();

  return (
    <Suspense fallback={<LoadingComponent />}>
      <Movies movies={movies} search={Array.isArray(search) ? search[0] : search} />
    </Suspense>
  );
}
