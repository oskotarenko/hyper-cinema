import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import { getMovieById } from "@/actions/movies/get-movie-by-id";
import { getScheduleById } from "@/actions/schedule/get-schedule-by-id";
import { NothingFound } from "@/app/(protected)/_module/components/nothing-found/NothingFound";
import { Button } from "@/shared/ui/button";

import { MovieData } from "../../_module/components/movie-data/MovieData";
import { OrderTicketsBlock } from "./_module/components/order-tickets-block/OrderTicketsBlock";

type Props = {
  params: {
    scheduleId: string;
  };
};
export default async function ScheduleDetailsPage({ params }: Props) {
  const schedule = await getScheduleById(params.scheduleId, true);
  if (!schedule) return <NothingFound title="Scheduled session not found" message="" />;

  const movie = await getMovieById(schedule.movieId);

  return (
    <div className="flex flex-col gap-2 h-full">
      <MovieData
        movie={movie}
        actionButton={
          <Link href={`/movies/${movie.id}`}>
            <Button variant="outline" icon={ChevronLeft}>
              All sessions
            </Button>
          </Link>
        }
      />
      <OrderTicketsBlock schedule={schedule} />
    </div>
  );
}
