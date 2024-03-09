import Image from "next/image";
import Link from "next/link";

import { getMovieById } from "@/actions/movies/get-movie-by-id";
import { AppRoutes } from "@/config/routes";
import { ISOToHoursMinutesDayMonth } from "@/shared/services/date.service";
import { Schedule } from "@prisma/client";

type Props = {
  schedule: Schedule;
};

export async function ScheduleCard({ schedule }: Props) {
  const movie = await getMovieById(schedule.movieId);
  return (
    <Link
      href={`${AppRoutes.Schedule}/${schedule.id}`}
      className="p-1 rounded-lg relative h-fit w-full hover-colors hover:bg-primary/70 hover:text-black"
    >
      <div className="flex flex-col gap-1">
        <Image
          src={movie.poster}
          width={400}
          height={600}
          alt={`${movie.title} poster`}
          className="rounded-lg w-full"
        />

        <p className="text-sm p-1 text-center text-black font-semibold rounded-md bg-primary">
          {ISOToHoursMinutesDayMonth(schedule.startTime.toISOString())}
        </p>
      </div>
    </Link>
  );
}
