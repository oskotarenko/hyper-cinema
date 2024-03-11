"use client";

import { useEffect, useState } from "react";

import { NothingFound } from "@/app/(protected)/_module/components/nothing-found/NothingFound";
import { DatetoDayMonth } from "@/shared/services/date.service";
import { Schedule } from "@prisma/client";

import { ScheduleMenuBody } from "./ScheduleMenuBody";
import { ScheduleMenuHeader } from "./ScheduleMenuHeader";

type Props = {
  schedules: Schedule[];
};
export function ScheduleMenu({ schedules }: Props) {
  const datesList = Array.from(
    new Set(
      schedules
        .filter((schedule) => new Date(schedule.startTime).getTime() > new Date().getTime())
        .map((schedule) => DatetoDayMonth(schedule.startTime)),
    ),
  );

  const [currentDate, setCurrentDate] = useState<string>(datesList[0]);
  const [displaySchedules, setDisplaySchedules] = useState<Schedule[]>(schedules);

  useEffect(() => {
    if (schedules.length > 0) {
      console.log(schedules);
      const dateParts = currentDate.split(".");
      const targetIsoDate = `${new Date().getFullYear()}-${dateParts[1]}-${dateParts[0]}`;

      const filteredSessions = schedules.filter((session) => session.startTime.toISOString().startsWith(targetIsoDate));
      setDisplaySchedules(filteredSessions);
    }
  }, [currentDate, schedules]);

  if (!schedules.length)
    return <NothingFound title="No scheduled sessions found for this movie" message="Perhaps they will appear later" />;

  return (
    <div className="w-full space-y-2 bg-gray p-3 rounded-lg">
      <ScheduleMenuHeader datesList={datesList} currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <ScheduleMenuBody displaySchedules={displaySchedules} />
    </div>
  );
}
