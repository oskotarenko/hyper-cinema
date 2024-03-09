"use server"

import { auth, } from "@/config/auth.config";
import { database, } from "@/config/database.config";
import { Ticket, User, } from "@prisma/client";

/**
 * @used_in app/(protected)/account
 */
export async function getProfile(): Promise<User & { tickets: Ticket[] }> {
  const session = await auth();
  if (!session) throw new Error("User not found");

  const user = await database.user.findUnique({ where: { id: session.user.id }, include: { tickets: true } });
  if (!user) throw new Error("User not found");

  return user;
}