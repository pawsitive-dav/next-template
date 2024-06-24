import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   console.log(`middleware check ${request.url}`);
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
