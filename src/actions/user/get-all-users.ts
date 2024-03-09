"use server"

import { database, } from "@/config/database.config";

import type { User } from "@prisma/client";

/**
 * @used_in app/(protected)/users/{process.env.USERS_ADMIN_URL}
 */
export async function getAllUsers(): Promise<User[]> {
  return await database.user.findMany();
}