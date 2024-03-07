"use client";

import { ReactNode } from "react";

import { UserRole } from "@prisma/client";

import { useUser } from "../../../../../shared/hooks/useUser";

type Props = {
  children: ReactNode;
  allowedRole: UserRole;
};

export function RoleGate({ children, allowedRole }: Props) {
  const user = useUser();

  if (user?.role !== allowedRole) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h1>ACCESS DENIED</h1>
      </div>
    );
  }

  return <>{children}</>;
}
