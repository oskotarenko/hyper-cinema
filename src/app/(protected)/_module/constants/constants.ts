import { Clapperboard, HelpCircle, Home, ListOrdered, LucideIcon, } from "lucide-react";

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
  { href: "/schedule", title: "Schedule", icon: ListOrdered },
  { href: "/about", title: "About", icon: HelpCircle }
]