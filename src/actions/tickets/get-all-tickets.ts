"use server";

import { database, } from "@/config/database.config";

export async function getAllTickets() {
  return await database.ticket.findMany();
}