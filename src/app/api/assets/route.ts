import { NextResponse } from "next/server";
import assets from "@/app/mocks/assets.json";

export async function GET(request: Request) {
  return NextResponse.json(assets);
}
