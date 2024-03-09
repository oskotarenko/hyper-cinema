import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { ISOToHoursMinutesDayMonth } from "@/shared/services/date.service";
import { Button } from "@/shared/ui/button";
import { Movie, Schedule } from "@prisma/client";

type Props = {
  schedule: Schedule;
  movie: Movie;
};
export default async function ScheduleData({ schedule, movie }: Props) {
  return (
    <div className="min-w-fit max-w-fit h-fit flex flex-col gap-2">
      <h1 className="hidden lg:block">Schedule details</h1>
      <div className="flex justify-between gap-4">
        <Link href={`${AppRoutes.Movies}/${movie.id}`} className="w-[135px] h-[200px] min-w-[135px] min-h-[200px]">
          <Image src={movie.poster} width={135} height={200} alt={`${movie.title} poster`} className="rounded-xl" />
        </Link>
        <div className="flex flex-col gap-2">
          <h3>{movie.title}</h3>
          <p className=" pt-1.5 pb-1  text-sm font-bold">{movie.restrictions}+</p>
          <div className="flex flex-col gap-1.5 mt-auto">
            <h1>{ISOToHoursMinutesDayMonth(schedule.startTime.toString())}</h1>
            <h3>Hall {schedule.hall}</h3>
            <h4>Duration {movie.duration} minutes</h4>
          </div>
        </div>
      </div>
      <div className="mt-4 w-3/4 lg:w-full">
        <Link href={`/movies/${movie.id}`}>
          <Button variant="outline" icon={ChevronLeft}>
            Choose another session
          </Button>
        </Link>
      </div>
    </div>
  );
}
