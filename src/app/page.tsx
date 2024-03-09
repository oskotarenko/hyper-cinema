import Link from "next/link";
import { redirect } from "next/navigation";

import { AppRoutes } from "@/config/routes";

// TODO finish this
export default function Home() {
  return redirect(AppRoutes.Home);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>There wil be home page</h1>

      <Link href={AppRoutes.Login} className="bg-primary text-[#000000] p-3 rounded-lg">
        Login
      </Link>
    </div>
  );
}
