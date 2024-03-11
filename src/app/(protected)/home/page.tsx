import { Github, Send } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { getMoviesSorted } from "@/actions/movies/get-movies-sorted";
import MoviesBlock from "@/app/(protected)/_module/components/movies-block/MoviesBlock";
import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";

import { LoadingComponent } from "../_module/components/loading/LoadingComponent";
import { HomeBanner } from "./_module/components/home-banner/HomeBanner";

export const metadata: Metadata = {
  title: "Home | Hyper Cinema",
};

export default async function HomePage() {
  const movies = await getMoviesSorted(10);
  if (!movies || !movies.length) throw Error("App can’t be launched because there is no movies");

  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="flex flex-col items-center gap-4">
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
        <div className="w-full flex justify-between items-center">
          <p className="text-primary">Created by oskotarenko</p>
          <div className="flex gap-2">
            <Link href="https://t.me/oskotarenko" target="_blank">
              <Button variant="link">
                <Send size={20} /> Telegram
              </Button>
            </Link>
            <Link href="https://github.com/oskotarenko/hyper-cinema" target="_blank">
              <Button variant="link">
                <Github size={20} /> Github Repo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
