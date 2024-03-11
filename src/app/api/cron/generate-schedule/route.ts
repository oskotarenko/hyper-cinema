import { NextResponse, } from "next/server";

import { generateSchedule, } from "@/actions/schedule/generate-schedule";

export async function GET() {
  await generateSchedule();
  return NextResponse.json({ ok: true });
}