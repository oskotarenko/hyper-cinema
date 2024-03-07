"use server"

import { database, } from "@/config/database.config";

import type { User } from "@prisma/client";

/**
 * This function searches for all users in database.
 * Used in user part of admin panel.
 * @returns User[]
 */
export async function getAllUsers(): Promise<User[]> {
  return await database.user.findMany();
}