"use client";

import { Undo2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { AppRoutes } from "@/config/routes";
import { useUser } from "@/shared/hooks/useUser";
import { UserRole } from "@prisma/client";

type Props = {
  children: ReactNode;
  allowedRole: UserRole;
};

export function RoleGate({ children, allowedRole }: Props) {
  const user = useUser();
  const pathname = usePathname();

  if (user?.role !== allowedRole) {
    return (
      <div className="w-fit h-fit flex flex-col justify-center items-center text-center z-10">
        <h1>Access denied</h1>
        <Link href={AppRoutes.Home}>
          Return Home <Undo2 />
        </Link>
        <h4>
          You do not have access to the resources at <span>{pathname}</span> path
        </h4>
      </div>
    );
  }

  return children;
}
