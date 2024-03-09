import { NextResponse, } from "next/server";

import { generateSchedule, } from "@/actions/schedule/generate-schedule";

export async function POST() {
  await generateSchedule();
  return NextResponse.json({ ok: true });
}