import { Clapperboard, HelpCircle, Home, ListOrdered, LucideIcon, } from "lucide-react";

import { AppRoutes, } from "@/config/routes";

export type NavRoute = {
  href: AppRoutes;
  title: string;
  icon: LucideIcon;
}

/**
 * Navigation routes for sidebar on pages, which available after authorization
 */
export const navRoutes: NavRoute[] = [
  { href: AppRoutes.Home, title: "Home", icon: Home },
  { href: AppRoutes.Movies, title: "Movies", icon: Clapperboard },
  { href: AppRoutes.Schedule, title: "Schedule", icon: ListOrdered },
  { href: AppRoutes.About, title: "About", icon: HelpCircle }
]