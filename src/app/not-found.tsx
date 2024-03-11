"use client";

import { Undo2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-fit flex flex-col gap-2 justify-center items-center text-center z-10">
        <h1>Not Found</h1>
        <Link href={AppRoutes.Home}>
          <Button variant="outline" icon={Undo2}>
            Return Home
          </Button>
        </Link>
        <h4>
          We were unable to find resources on the <span className="text-primary/70">{pathname}</span> path
        </h4>
      </div>
    </div>
  );
}
