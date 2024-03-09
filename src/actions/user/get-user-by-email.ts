"use server";

import { database, } from "@/config/database.config";
import { User, } from "@prisma/client";

/**
 * @used_in actions/login.ts | actions/register.ts | config/auth.config.ts
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await database.user.findUnique({ where: { email: email } });
    return user;
  } catch (e) {
    return null;
  }
}