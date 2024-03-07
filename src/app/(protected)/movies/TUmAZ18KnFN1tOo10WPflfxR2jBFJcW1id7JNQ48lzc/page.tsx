import { getAllMovies } from "@/actions/movies/get-all-movies";

import { CreateMovieForm } from "./_module/components/CreateMovieForm";
import { MoviesTable } from "./_module/components/MoviesTable";

export default async function AdminMoviesPage() {
  const movies = await getAllMovies();
  return (
    <div className="w-full flex flex-col gap-4">
      <MoviesTable movies={movies} />
      <CreateMovieForm />
    </div>
  );
}
