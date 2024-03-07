import NextAuth from "next-auth";

import { authConfig, } from "@/config/auth.config";

import {
  apiAuthPrefix, authRoutes, DEFAULT_AUTH_REDIRECT, DEFAULT_LOGGED_IN_REDIRECT, publicRoutes,
} from "./config/routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGGED_IN_REDIRECT, nextUrl));
    }

    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackurl = encodeURIComponent(callbackUrl);
    return Response.redirect(new URL(`${DEFAULT_AUTH_REDIRECT}?callbackUrl=${encodedCallbackurl}`, nextUrl));
  }

  return null;
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}