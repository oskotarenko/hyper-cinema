"use client";

import clsx from "clsx";

import { updateScheduleStatus } from "@/actions/schedule/update-schedule-status";
import { extractResponse } from "@/shared/services/response.service";

import type { Schedule } from "@prisma/client";
type Props = {
  schedule: Schedule;
};

export function ScheduleStatusButton({ schedule }: Props) {
  const onClick = async () => {
    const response = await updateScheduleStatus(schedule.id, "Canceled");
    extractResponse(response);
  };

  return (
    <button
      disabled={schedule.status === "Completed" || schedule.status === "Canceled"}
      onClick={onClick}
      className={clsx(
        "block font-bold hover:text-primary hover:border-primary hover-colors",
        schedule.status === "Sale" && "hover:text-red-500 hover:border-red-500",
        (schedule.status === "Completed" || schedule.status === "Canceled") &&
          "text-white/50 border-white/50 hover:text-white/50 hover:border-white/50",
      )}
    >
      Cancel
    </button>
  );
}
