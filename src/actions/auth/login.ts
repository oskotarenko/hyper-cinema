"use server";

import { AuthError, } from "next-auth";

import { getUserByEmail, } from "@/actions/user/get-user-by-email";
import { LoginScheme, } from "@/app/(public)/auth/_module/schemes/login.scheme";
import { signIn, } from "@/config/auth.config";
import { DEFAULT_LOGGED_IN_REDIRECT, } from "@/config/routes";

export async function login(formData: FormData, callbackUrl: string | null): Promise<{ error: string }> {
  const validatedFields = LoginScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!validatedFields.success) return { error: "Invalid fileds" }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password)
    return { error: "User not found" }

  try {
    await signIn("credentials",
      {
        email,
        password,
        redirectTo: callbackUrl || DEFAULT_LOGGED_IN_REDIRECT
      },
    )
  } catch (error) {
    if (error instanceof AuthError) {

      return error.type === "CredentialsSignin" ? { error: "Invalid credentials" } : { error: "Something went wrong" }
    } else {
      throw error;
    }
  }
}