import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (session) {
    return NextResponse.json(
      { user: session.user, message: "Data retrieved successfully" },
      { status: 200 } // HTTP 200 for success
    );
  }

  return NextResponse.json(
    { user: null, message: "Failed to retrieve data" },
    { status: 401 } // HTTP 401 for unauthorized
  );
}
