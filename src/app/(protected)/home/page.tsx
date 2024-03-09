import Link from "next/link";

import { getMoviesSorted } from "@/actions/movies/get-movies-sorted";
import MoviesBlock from "@/app/_module/components/MoviesBlock";
import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";

import { HomeBanner } from "./_module/components/home-banner/HomeBanner";

export default async function HomePage() {
  const movies = await getMoviesSorted(10);
  if (!movies || !movies.length) throw Error("App can’t be launched because there is no movies");

  return (
    <div className="flex flex-col items-center gap-2">
      <HomeBanner movie={movies[0]} />
      <div>
        <h1 className="pb-2">Newest movies</h1>
        <MoviesBlock movies={movies} />
      </div>
      <Link href={AppRoutes.Schedule}>
        <Button variant="outline" classname="font-bold max-w-[200px]">
          Check schedules
        </Button>
      </Link>
    </div>
  );
}
