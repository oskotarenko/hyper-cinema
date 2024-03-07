"use client";

import clsx from "clsx";

import { updateScheduleStatus } from "@/actions/schedules/update-schedule-status";
import { extractResponse } from "@/shared/services/response.service";

import type { Schedule } from "@prisma/client";
type Props = {
  schedule: Schedule;
};

export function ScheduleStatusButton({ schedule }: Props) {
  const onClick = async () => {
    const response = await updateScheduleStatus(schedule.id);
    extractResponse(response);
  };

  return (
    <button
      disabled={schedule.status === "Completed"}
      onClick={onClick}
      className={clsx(
        "block font-bold hover:text-primary hover:border-primary hover-colors",
        schedule.status === "Sale" && "hover:text-red-500 hover:border-red-500",
        schedule.status === "Completed" && "text-white/80 border-white/80 hover:text-white/80 hover:border-white/80",
      )}
    >
      {schedule.status === "Sale" ? "Cancel" : "Resume sale"}
    </button>
  );
}
