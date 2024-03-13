"use server";

import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function verifyLogin(email: string, password: string) {
  console.log(email, password);
  return true;
}

const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (verifyLogin(email, password)) {
      // console.log("Redirecting to /");
      const temp = cookies().set(
        "currentUser",
        JSON.stringify({ email, name: "John Doe" }),
        {
          expires: Date.now() + 1000 * 60 * 5,
        },
      );

      console.log(temp);

      return new NextResponse("Logged in", { status: 200 });
    } else {
      return new NextResponse("Failed to login", { status: 401 });
    }
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal error occured", { status: 500 });
  }
  // NextResponse.redirect("/");
};

export { POST };
