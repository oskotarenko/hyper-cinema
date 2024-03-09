"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

import { AppRoutes } from "@/config/routes";

type Props = {
  hideOnMobile: boolean;
};
export function Logo({ hideOnMobile }: Props) {
  return (
    <Link
      href={AppRoutes.Home}
      className={clsx("w-full flex items-center gap-2 px-2", hideOnMobile && "hidden tablet:flex")}
    >
      <Image
        src={logo}
        width={100}
        height={100}
        alt="Hyper Cinema Logo"
        className="w-[30px] h-30px tablet:w-[40px] tablet:h-[40px]"
      />
      <h2>Hyper Cinema</h2>
    </Link>
  );
}
