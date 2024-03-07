"use client";

import { CircleUserRound } from "lucide-react";
import Link from "next/link";

import { useUser } from "@/shared/hooks/useUser";
import { Button } from "@/shared/ui/button";
import { SearchInput } from "@/shared/ui/search-input";

import { AdminPanelLink } from "./AdminPanelLink";

export default function AppHeader() {
  const user = useUser();

  return (
    <header className="flex justify-between gap-2 w-full h-fit p-2 items-center sticky top-0 left-0 bg-background/20 z-10 backdrop-blur-[2px]">
      <SearchInput />
      <div className="[&>a]:flex-none flex gap-2">
        <AdminPanelLink />
        <Link href="/account">
          <Button variant="filled">
            <CircleUserRound />
            Account
          </Button>
        </Link>
      </div>
    </header>
  );
}
