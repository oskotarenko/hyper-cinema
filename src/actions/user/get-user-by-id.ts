"use server";

import { database, } from "@/config/database.config";
import { User, } from "@prisma/client";

/**
 * This function searches for a user in the database by ID
 * @param id string
 * @returns User or null
 */
export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await database.user.findUnique({ where: { id: id } });
    return user;
  } catch (e) {
    return null;
  }
}