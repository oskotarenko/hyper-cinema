import { MovieCard } from "@/shared/components/MovieCard";
import { Movie } from "@prisma/client";

type Props = {
  movie: Movie;
};
export default function HomeBannerLatestRelease({ movie }: Props) {
  if (!movie) return null;

  return (
    <div className="hidden sm:flex w-full lg:w-1/2 justify-center items-center">
      <div className="w-full max-w-[200px] desktop-sm:max-w-[300px] h-fit">
        <MovieCard movie={movie} />
        <h2 className="pt-2">The latest release</h2>
      </div>
    </div>
  );
}
