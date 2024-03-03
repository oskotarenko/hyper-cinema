import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/logo.svg";
import { AppNavList } from "./_components/AppNavList";

export function AppNav() {
  return (
    <div className="flex justify-center sticky top-full bg-background p-2 z-[1000] tablet:flex-col tablet:h-full">
      <Link href="/home" className="w-full hidden tablet:flex items-center gap-2 px-2">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Hyper Cinema Logo"
          className="w-[30px] h-30px tablet:w-[40px] tablet:h-[40px]"
        />
        <h2>Hyper Cinema</h2>
      </Link>
      <AppNavList />
    </div>
  );
}
