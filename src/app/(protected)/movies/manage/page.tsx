import { Metadata } from "next";
import { Suspense } from "react";

import { getAllMovies } from "@/actions/movies/get-all-movies";

import { LoadingComponent } from "../../_module/components/loading/LoadingComponent";
import { CreateMovieForm } from "./components/CreateMovieForm";
import { MoviesTable } from "./components/MoviesTable";

export const metadata: Metadata = {
  title: "Movies | Hyper Cinema",
  robots: {
    index: false,
  },
};

export default async function MangeMoviesPage() {
  const movies = await getAllMovies();
  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="w-full flex flex-col gap-4">
        <MoviesTable movies={movies} />
        <CreateMovieForm />
      </div>
    </Suspense>
  );
}
