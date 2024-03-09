import { Schedule } from "@prisma/client";

import { ScheduleCard } from "./ScheduleCard";

type Props = {
  schedules: Schedule[];
};
export function ScheduleBlock({ schedules }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h1>Closest sessions</h1>
      <div className="grid grid-cols-2 phone-lg:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 desktop-sm:grid-cols-6 desktop-md:grid-cols-7 desktop-lg:grid-cols-8 gap-2">
        {schedules.map((schedule) => (
          <ScheduleCard schedule={schedule} key={schedule.id} />
        ))}
      </div>
    </div>
  );
}
