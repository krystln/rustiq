import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;

  // if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  // 	return Response.redirect(new URL("/dashboard", request.url));
  // }

  if (
    currentUser &&
    currentUser != "admin" &&
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    return Response.redirect(new URL("/profile", request.url));
  }

  if (!currentUser && request.nextUrl.pathname.startsWith("/cart")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
