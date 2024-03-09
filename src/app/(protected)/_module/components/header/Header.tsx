import { CircleUserRound } from "lucide-react";
import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";
import { SearchInput } from "@/shared/ui/search-input";

import { AdminPanelLink } from "./AdminPanelLink";

export default function AppHeader() {
  return (
    <header className="flex justify-between gap-2 w-full h-fit p-2 items-center sticky top-0 left-0 bg-background/80 z-10 backdrop-blur-[2px]">
      <SearchInput />
      <div className="[&>a]:flex-none flex gap-2">
        <AdminPanelLink />
        <Link href={AppRoutes.Account}>
          <Button variant="filled">
            <CircleUserRound />
            Account
          </Button>
        </Link>
      </div>
    </header>
  );
}
