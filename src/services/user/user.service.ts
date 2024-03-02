import { database, } from "../../config/database.config";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await database.user.findUnique({ where: { email: email } });
    return user;
  } catch (e) {
    return null;
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await database.user.findUnique({ where: { id: id } });
    return user;
  } catch (e) {
    return null;
  }
}