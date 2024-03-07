"use server";

import { signOut, } from "@/config/auth.config";

// Allows to do something on user logout and also can be use in client components
export async function logout() {
  await signOut()
}