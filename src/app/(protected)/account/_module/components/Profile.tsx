"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

import { logout } from "@/actions/auth/logout";
import { AppRoutes } from "@/config/routes";
import { Button } from "@/shared/ui/button";
import { Ticket, User } from "@prisma/client";

type Props = {
  profile: User & { tickets: Ticket[] };
};
export function Profile({ profile }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push(AppRoutes.Index);
  };

  return (
    <div className="flex flex-col gap-2 w-full lg:w-1/3">
      <h1>Profile</h1>
      <div className="flex gap-2">
        <div className=" flex flex-col gap-2 w-[90px] text-white/60">
          <p>Email:</p>
          <p>Name:</p>
          <p>Balance:</p>
        </div>
        <div className="flex flex-col gap-2">
          <p>{profile.email}</p>
          <p>{profile.name}</p>
          <p>
            {profile.balance} {profile.balance === 1 ? "HYPER" : "HYPERS"}
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        classname="max-w-fit text-nowrap text-red-600 font-bold border-none hover:bg-red-600 hover:border-red-600 hover:text-white"
        onClick={() => handleLogout()}
        icon={LogOut}
      >
        Log Out
      </Button>
    </div>
  );
}
