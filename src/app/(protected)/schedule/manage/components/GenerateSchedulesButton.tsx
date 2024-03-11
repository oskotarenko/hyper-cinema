"use client";

import { generateSchedule } from "@/actions/schedule/generate-schedule";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";

export function GenerateSchedulesButton() {
  const handleGenerateSchedules = async () => {
    const response = await generateSchedule();
    extractResponse(response);
  };

  return (
    <Button onClick={handleGenerateSchedules} variant="filled" classname="w-full phone-lg:max-w-[300px]">
      Generate Schedules for next week
    </Button>
  );
}
