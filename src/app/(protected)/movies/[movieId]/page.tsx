import { getMovieById } from "@/actions/movies/get-movie-by-id";

import { MovieData } from "../../_module/components/movie-data/MovieData";
import { OpenTrailerButton } from "../../_module/components/movie-data/OpenTrailerButton";
import { ScheduleMenu } from "./_module/components/ScheduleMenu";

type Props = {
  params: {
    movieId: string;
  };
};

export default async function MovieDetailsPage({ params }: Props) {
  const movie = await getMovieById(params.movieId);

  return (
    <div className="flex flex-col gap-8 relative">
      <MovieData movie={movie} actionButton={<OpenTrailerButton url={movie.trailer} />} />
      <ScheduleMenu schedules={movie.schedules} />
    </div>
  );
}
