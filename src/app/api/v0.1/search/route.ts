import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const GET = (req: NextRequest, {}) => {
  const params = req.nextUrl.searchParams;

  console.log("Searching", params.get("query"));
  return NextResponse.json({
    message: "GET search",
    params: params.get("query"),
  });
};

export { GET };
