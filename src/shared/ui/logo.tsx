"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

import { AppRoutes } from "@/config/routes";

import { useUser } from "../hooks/useUser";

export function Logo() {
  const user = useUser();

  return (
    <Link href={user ? AppRoutes.Home : AppRoutes.Index} className="w-full hidden tablet:flex items-center gap-2 px-2">
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
