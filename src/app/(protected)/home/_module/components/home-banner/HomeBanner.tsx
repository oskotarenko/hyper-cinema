"use client";

import { ChevronsDown } from "lucide-react";

import { Movie } from "@prisma/client";

import HomeBannerLatestRelease from "./HomeBannerLatestRelease";
import { HomeBannerTitle } from "./HomeBannerTitle";

type Props = {
  movie: Movie;
};
export function HomeBanner({ movie }: Props) {
  return (
    <div className=" h-[calc(100dvh-56px-56px-1rem)] tablet:h-[calc(100dvh-58px-1rem)] w-full flex relative">
      <HomeBannerTitle />
      <HomeBannerLatestRelease movie={movie} />

      <ChevronsDown
        size={48}
        className="absolute text-primary bottom-0 left-[calc(50%-24px)] tablet:[calc(50%-124px)] animate-pulse"
      />
    </div>
  );
}
