import { Clapperboard, HelpCircle, Home, ListOrdered, LucideIcon, } from "lucide-react";

/** 
 * An array of routes that are accessible to the public
 * These routes do not require authentification
 * @type {string[]}
 */
export const publicRoutes: string[] = [
  "/",
]

/**
 * An array of routes that are used for authentification
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
]

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API auhentification purposes
 *  @type {string}
 */
export const apiAuthPrefix: string = "/api/auth"

/**
 * The default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGGED_IN_REDIRECT: string = "/home"

/**
 * The default redirect to guest after enter protected page
 * @type {string}
 */
export const DEFAULT_AUTH_REDIRECT: string = "/auth/login"


export type NavRoute = {
  href: string;
  title: string;
  icon: LucideIcon;
}

/**
 * Navigation routes for sidebar on pages, which available after authorization
 * @type {NavRoute[]}
 */

export const navRoutes: NavRoute[] = [
  { href: "/home", title: "Home", icon: Home },
  { href: "/movies", title: "Movies", icon: Clapperboard },
  { href: "/schedules", title: "Schedules", icon: ListOrdered },
  { href: "/faq", title: "FAQ", icon: HelpCircle }
]