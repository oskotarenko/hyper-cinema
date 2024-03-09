"use client";

import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { ISOToHoursMinutes } from "@/shared/services/date.service";
import { Button } from "@/shared/ui/button";
import { Schedule } from "@prisma/client";

type Props = {
  displaySchedules: Schedule[];
};
export function ScheduleMenuBody({ displaySchedules }: Props) {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-4 desktop-md:grid-cols-5 gap-1.5 tablet:gap-2 flex-wrap w-full">
      {displaySchedules.map((schedule) => {
        return (
          <div key={schedule.id}>
            <Link href={`${AppRoutes.Schedule}/${schedule.id}`}>
              <Button variant="outline" key={schedule.id}>
                {ISOToHoursMinutes(schedule.startTime.toISOString())}
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
