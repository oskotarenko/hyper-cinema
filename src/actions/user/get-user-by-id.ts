"use server";

import { database, } from "@/config/database.config";
import { User, } from "@prisma/client";

/**
 * @used_in actions/buy-tickets.ts | config/auth.config.ts
 */
export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await database.user.findUnique({ where: { id: id } });
    return user;
  } catch (e) {
    return null;
  }
}