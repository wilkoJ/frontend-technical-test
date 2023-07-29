import { users } from "../../../mockData";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ users });
}
