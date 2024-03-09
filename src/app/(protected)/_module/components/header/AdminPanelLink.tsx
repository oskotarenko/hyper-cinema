"use client";

import { BarChartBig } from "lucide-react";
import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { useUser } from "@/shared/hooks/useUser";
import { Button } from "@/shared/ui/button";

export function AdminPanelLink() {
  const user = useUser();

  if (user.role !== "ADMIN") return null;

  return (
    <Link href={AppRoutes.Admin} className="hidden tablet:block">
      <Button variant="outline">
        <BarChartBig />
        Admin Panel
      </Button>
    </Link>
  );
}
