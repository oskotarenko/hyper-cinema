"use server";

import { signOut, } from "@/config/auth.config";

/**
 * Server-action of logging out of an account
 * Created as a server-action instead of the built-in next-auth function signOut() 
 * to allow to perform additional operations when logging out of your account
 * @used_in Profile.tsx
 */
export async function logout(): Promise<void> {
  await signOut()
}