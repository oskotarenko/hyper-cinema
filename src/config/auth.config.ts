import { NextAuthConfig, User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

export default {
  providers: [
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    credentials({
      async authorize(credentials) {

        const user: User = {}

        return user;
      }
    })
  ]
} satisfies NextAuthConfig;