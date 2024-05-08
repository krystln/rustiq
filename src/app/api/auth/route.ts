"use server";

import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const password_hash = await crypto.subtle
      .digest("SHA-256", new TextEncoder().encode(password))
      .then((hash) =>
        Array.from(new Uint8Array(hash))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join(""),
      );

    // console.log({ email, password_hash });
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal error occured", { status: 500 });
  }
};

export { POST };
