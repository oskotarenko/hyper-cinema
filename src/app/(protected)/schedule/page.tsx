import { Metadata } from "next";
import { Suspense } from "react";

import { getClosestSchedule } from "@/actions/schedule/get-closest-schedule";

import { LoadingComponent } from "../_module/components/loading/LoadingComponent";
import { NothingFound } from "../_module/components/nothing-found/NothingFound";
import { ScheduleBlock } from "./_module/components/ScheduleBlock";

export const metadata: Metadata = {
  title: "Schedule | Hyper Cinema",
};

export default async function SchedulesPage() {
  const schedules = await getClosestSchedule();

  if (!schedules.length)
    return <NothingFound title="No scheduled sessions found" message="Aliens stole our calendar!" />;

  return (
    <Suspense fallback={<LoadingComponent />}>
      <ScheduleBlock schedules={schedules} />
    </Suspense>
  );
}
