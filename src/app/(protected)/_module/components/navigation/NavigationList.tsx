"use client";

import { navRoutes } from "@/config/routes";

import { AppNavigationListItem } from "./NavigationListItem";

export function AppNavigationList() {
  return (
    <nav className="h-fit md:h-full md:mt-3.5">
      <ul className="flex gap-2 h-fit md:flex-col">
        {navRoutes.map((route) => (
          <AppNavigationListItem key={route.href} route={route} />
        ))}
      </ul>
    </nav>
  );
}
