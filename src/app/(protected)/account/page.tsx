import { getProfile } from "@/actions/user/get-profile";

import { Profile } from "./_module/components/Profile";
import { Tickets } from "./_module/components/Tickets";

export default async function AccountPage() {
  const profile = await getProfile();

  return (
    <div className="flex flex-col gap-6 lg:flex-row relative">
      <Profile profile={profile} />
      <Tickets tickets={profile.tickets} />
    </div>
  );
}
