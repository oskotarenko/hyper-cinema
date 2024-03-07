"use server";

import { database, } from "@/config/database.config";
import { User, } from "@prisma/client";

/**
 * This function searches for a user in the database by email
 * @param email string
 * @returns User or null
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await database.user.findUnique({ where: { email: email } });
    return user;
  } catch (e) {
    return null;
  }
}