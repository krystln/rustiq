import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("user");

  // if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  // 	return Response.redirect(new URL("/dashboard", request.url));
  // }

  if (request.nextUrl.pathname.startsWith("/cart")) {
    if (!!currentUser) {
      // console.log("User is logged in", currentUser);
      return;
    }

    // console.log("Redirecting to /login", currentUser);
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
