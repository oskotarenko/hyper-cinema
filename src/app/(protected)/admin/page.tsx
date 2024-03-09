import Link from "next/link";

import { Button } from "@/shared/ui/button";

import { RoleGate } from "../_module/components/roles-gate/RolesGate";

export default function AdminPage() {
  return (
    <RoleGate allowedRole="ADMIN">
      <div className="w-full h-full">
        <h1 className="pb-2">Admin Panel</h1>
        <div className="grid grid-cols-2 gap-2 tablet:w-1/3">
          <Link href={`/movies/${process.env.MOVIES_ADMIN_URL}`}>
            <Button variant="outline">Movies</Button>
          </Link>
          <Link href={`/schedule/${process.env.SCHEDULES_ADMIN_URL}`}>
            <Button variant="outline">Schedules</Button>
          </Link>
          <Link href={`/tickets/${process.env.TICKETS_ADMIN_URL}`}>
            <Button variant="outline">Tickets</Button>
          </Link>
          <Link href={`/users/${process.env.USER_ADMIN_URL}`}>
            <Button variant="outline">Users</Button>
          </Link>
        </div>
      </div>
    </RoleGate>
  );
}
