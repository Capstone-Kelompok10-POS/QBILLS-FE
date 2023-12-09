import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const paths = [
  "/dashboard",
  "/manageaccount",
  "/manageproduct",
  "/membership",
  "/transaction",
  "/report",
];

export default withAuth(
  function middleware(request) {
    for (let path of paths) {
      if (
        request.nextUrl.pathname.startsWith(path) &&
        request.nextauth.token?.results.role !== "SuperAdmin" &&
        request.nextauth.token?.results.role !== "Admin"
      ) {
        return NextResponse.rewrite(new URL("/login", request.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: paths,
};
