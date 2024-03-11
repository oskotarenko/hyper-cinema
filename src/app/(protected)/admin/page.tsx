import { Metadata } from "next";
import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";

import { RoleGate } from "../_module/components/roles-gate/RolesGate";

export const metadata: Metadata = {
  title: "Dashboard | Hyper Cinema",
  robots: {
    index: false,
  },
};

export default function AdminPage() {
  return (
    <RoleGate allowedRole="ADMIN">
      <div className="w-full h-full">
        <h1 className="pb-2">Admin Panel</h1>
        <div className="grid grid-cols-2 gap-2 tablet:w-1/3">
          <Link href={`${AppRoutes.Movies}/manage`}>
            <Button variant="outline">Movies</Button>
          </Link>
          <Link href={`${AppRoutes.Schedule}/manage`}>
            <Button variant="outline">Schedules</Button>
          </Link>
          <Link href={`${AppRoutes.Tickets}/manage`}>
            <Button variant="outline">Tickets</Button>
          </Link>
          <Link href={`${AppRoutes.Users}/manage`}>
            <Button variant="outline">Users</Button>
          </Link>
        </div>
      </div>
    </RoleGate>
  );
}
