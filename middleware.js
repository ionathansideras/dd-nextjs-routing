import { NextResponse } from "next/server";

// it runs before every request
export function middleware(request) {
    console.log("Middleware", request);
    return NextResponse.next();
}

// it makes the middleware run only for the /api route
export const config = {
    matcher: "/api",
};
