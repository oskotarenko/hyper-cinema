import NextAuth from "next-auth";

import { PrismaAdapter, } from "@auth/prisma-adapter";
import { UserRole, } from "@prisma/client";

import { getAccountByUserId, } from "../services/account/account.service";
import { getUserById, } from "../services/user/user.service";
import authConfig from "./auth.config";
import { database, } from "./database.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  adapter: PrismaAdapter(database),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.picture = existingUser.image;
      token.role = existingUser.role;

      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.role) {
        // ? The operator "as" is used there because auth.js currently does not allow to typificate token clearly
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isOAuth = !!token.isOAuth;
        session.user.name = token.name;
        session.user.email = token.email;
      }

      return session;
    },
  },
  ...authConfig
})