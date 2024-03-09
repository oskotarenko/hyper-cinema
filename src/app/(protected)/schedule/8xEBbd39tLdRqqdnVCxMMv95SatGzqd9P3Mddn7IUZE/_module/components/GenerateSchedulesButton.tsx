"use client";

import { generateSchedules } from "@/actions/schedule/generate-schedules";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";

export function GenerateSchedulesButton() {
  const handleGenerateSchedules = async () => {
    const response = await generateSchedules();
    extractResponse(response);
  };

  return (
    <Button onClick={handleGenerateSchedules} variant="filled" classname="w-full phone-lg:max-w-[300px]">
      Generate Schedules for next week
    </Button>
  );
}
