"use server";

import { database, } from "@/config/database.config";
import { Account, } from "@prisma/client";

/**
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