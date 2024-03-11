import { Metadata } from "next";
import { Suspense } from "react";

import { getProfile } from "@/actions/user/get-profile";

import { LoadingComponent } from "../_module/components/loading/LoadingComponent";
import { Profile } from "./_module/components/Profile";
import { Tickets } from "./_module/components/Tickets";

export const metadata: Metadata = {
  title: "Account | Hyper Cinema",
  robots: {
    index: false,
  },
};

export default async function AccountPage() {
  const profile = await getProfile();

  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="flex flex-col gap-6 lg:flex-row relative">
        <Profile profile={profile} />
        <Tickets tickets={profile.tickets} />
      </div>
    </Suspense>
  );
}
