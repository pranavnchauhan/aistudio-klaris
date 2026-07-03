import { NextResponse } from "next/server";

const DEMO_BOOKING_URL = "https://cal.com/kd-pc/klaris-partnership-discussion";

export function GET() {
  return NextResponse.redirect(DEMO_BOOKING_URL, { status: 302 });
}
