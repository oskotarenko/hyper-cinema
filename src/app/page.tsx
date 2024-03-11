import { redirect } from "next/navigation";

import { AppRoutes } from "@/config/routes";

export default function RootPage() {
  return redirect(AppRoutes.Home);
}
