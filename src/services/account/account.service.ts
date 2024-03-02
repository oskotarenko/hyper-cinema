import { database, } from "../../config/database.config";

export async function getAccountByUserId(userId: string) {
  try {
    const account = database.account.findFirst({
      where: { userId }
    });

    return account;
  } catch {
    return null;
  }
}