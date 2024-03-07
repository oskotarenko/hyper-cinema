import bcrypt from "bcryptjs";
import NextAuth, { NextAuthConfig, } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { getAccountByUserId, } from "@/actions/account/get-account-by-user-id";
import { getUserByEmail, } from "@/actions/user/get-user-by-email";
import { getUserById, } from "@/actions/user/get-user-by-id";
import { LoginScheme, } from "@/app/(public)/auth/_module/schemes/login.scheme";
import { database, } from "@/config/database.config";
import { PrismaAdapter, } from "@auth/prisma-adapter";
import { UserRole, } from "@prisma/client";

export const authConfig: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFiels = LoginScheme.safeParse(credentials);
        if (!validatedFiels.success) return null;

        const { email, password } = validatedFiels.data;

        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        const isPasswordsMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordsMatch) return null;

        return user;
      },
    })
  ],
};

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