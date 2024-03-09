import Link from "next/link";

import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";

export function HomeBannerTitle() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 w-full lg:w-1/2 h-full">
      <h1 className="text-4xl sm:text-3xl lg:text-5xl font-extrabold text-center text-nowrap">HYPER CINEMA</h1>
      <Link href={AppRoutes.Schedule}>
        <Button variant="filled" classname="font-bold">
          Discover closest schedules
        </Button>
      </Link>
    </div>
  );
}
