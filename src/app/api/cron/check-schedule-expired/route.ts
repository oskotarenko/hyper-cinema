import { NextResponse, } from "next/server";

import { checkIsScheduleCompleted, } from "@/actions/schedule/check-is-schedule-completed";
import { database, } from "@/config/database.config";

export async function POST() {
  const now = new Date();
  const schedules = await database.schedule.findMany({ where: { AND: [{ status: "Sale" }, { status: "Canceled" }] } });

  for (const schedule of schedules) {
    await checkIsScheduleCompleted(now, schedule)
  }

  return NextResponse.json({ ok: true });
}