import { redirect } from "next/navigation";

import { AppRoutes } from "@/config/routes";

export default function AuthPage() {
  return redirect(AppRoutes.Login);
}
