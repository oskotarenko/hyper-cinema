import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { getMovieById } from "@/actions/movies/get-movie-by-id";
import { getScheduleById } from "@/actions/schedule/get-schedule-by-id";
import { NothingFound } from "@/app/(protected)/_module/components/nothing-found/NothingFound";
import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";

import { LoadingComponent } from "../../_module/components/loading/LoadingComponent";
import { MovieData } from "../../_module/components/movie-data/MovieData";
import { OrderTicketsBlock } from "./_module/components/order-tickets-block/OrderTicketsBlock";

type Props = {
  params: {
    scheduleId: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const schedule = await getScheduleById(params.scheduleId);
  const movie = await getMovieById(schedule.movieId);
  return { title: `${movie.title} Session | Hyper Cinema` };
}

export default async function ScheduleDetailsPage({ params }: Props) {
  const schedule = await getScheduleById(params.scheduleId);
  if (!schedule) return <NothingFound title="Scheduled session not found" message="" />;

  const movie = await getMovieById(schedule.movieId);

  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="flex flex-col gap-2 h-full">
        <MovieData
          movie={movie}
          actionButton={
            <Link href={`${AppRoutes.Movies}/${movie.id}`}>
              <Button variant="outline" icon={ChevronLeft}>
                All sessions
              </Button>
            </Link>
          }
        />
        <OrderTicketsBlock schedule={schedule} />
      </div>
    </Suspense>
  );
}
