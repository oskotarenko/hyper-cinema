"use server";

import { database, } from "@/config/database.config";
import { Account, } from "@prisma/client";

/**
 * Search for a user account by user ID
 * @param userId ID of user which the account is linked
 * @used_in auth.config.ts
 */
export async function getAccountByUserId(userId: string): Promise<Account | null> {
  try {
    return await database.account.findFirst({
      where: { userId }
    });
  } catch {
    return null;
  }
}