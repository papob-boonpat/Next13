import { NextResponse } from "next/server";
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  // const regex = new RegExp("/api/*");

  // if (regex.test(request.url)) {
  // }
  const origin = request.headers.get("origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  console.log("middleware !");

  console.log(request.method);
  console.log(request.url);

  console.log(origin);
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
