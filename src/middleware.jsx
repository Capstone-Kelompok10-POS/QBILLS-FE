import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request) {
    if (
      request.nextUrl.pathname.startsWith("/dashboard") &&
      request.nextauth.token?.results.role !== "SuperAdmin" &&
      request.nextauth.token?.results.role !== "Admin"
    ) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/manageaccount") &&
      request.nextauth.token?.results.role !== "SuperAdmin"
    ) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/manageproduct") &&
      request.nextauth.token?.results.role !== "SuperAdmin"
    ) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/membership") &&
      request.nextauth.token?.results.role !== "SuperAdmin"
    ) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/transaction") &&
      request.nextauth.token?.results.role !== "SuperAdmin"
    ) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }

    if (
      request.nextUrl.pathname.startsWith("/report") &&
      request.nextauth.token?.results.role !== "SuperAdmin"
    ) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: [
    "/dashboard",
    "/manageaccount",
    "/manageproduct",
    "/membership",
    "/transaction",
    "/report",
  ],
};
