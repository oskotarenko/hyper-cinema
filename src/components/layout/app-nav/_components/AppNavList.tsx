"use client";

import { navRoutes } from "../../../../config/routes";
import { AppNavItem } from "./AppNavItem";

export function AppNavList() {
  return (
    <nav className="h-fit md:h-full md:mt-3.5">
      <ul className="flex gap-2 h-fit md:flex-col">
        {navRoutes.map((route) => (
          <AppNavItem key={route.href} route={route} />
        ))}
      </ul>
    </nav>
  );
}
