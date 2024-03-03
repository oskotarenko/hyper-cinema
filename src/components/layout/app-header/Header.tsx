"use client";

import { CircleUserRound } from "lucide-react";
import Link from "next/link";

import { Button } from "../../ui/button";
import { SearchInput } from "../../ui/search-input";

export default function Header() {
  return (
    <header className="flex justify-between gap-2 w-full h-fit p-2 items-center sticky top-0 left-0 bg-background/20 z-10 backdrop-blur-[2px]">
      <SearchInput />
      <div className="[&>a]:flex-none">
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
