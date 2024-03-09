"use client";

import Link from "next/link";

import { ISOToHoursMinutes } from "@/shared/services/date.service";
import { Button } from "@/shared/ui/button";
import { Schedule } from "@prisma/client";

type Props = {
  displaySessions: Schedule[];
};
export function ScheduleMenuBody({ displaySessions }: Props) {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-4 desktop-md:grid-cols-5 gap-1.5 tablet:gap-2 flex-wrap w-full">
      {displaySessions.map((session) => {
        return (
          <div key={session.id}>
            <Link href={`/schedule/${session.id}`}>
              <Button variant="outline" key={session.id}>
                {ISOToHoursMinutes(session.startTime.toISOString())}
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
