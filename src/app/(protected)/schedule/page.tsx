import { getClosestSchedules } from "@/actions/schedule/get-closest-schedule";

import { NothingFound } from "../_module/components/nothing-found/NothingFound";
import { ScheduleBlock } from "./_module/components/ScheduleBlock";

export default async function SchedulesPage() {
  const schedules = await getClosestSchedules();

  if (!schedules.length)
    return <NothingFound title="No scheduled sessions found" message="Aliens stole our calendar!" />;

  return <ScheduleBlock schedules={schedules} />;
}
