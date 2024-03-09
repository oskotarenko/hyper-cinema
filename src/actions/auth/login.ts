"use server";

import { AuthError, } from "next-auth";

import { getUserByEmail, } from "@/actions/user/get-user-by-email";
import { LoginScheme, } from "@/app/(public)/auth/_module/schemes/login.scheme";
import { signIn, } from "@/config/auth.config";
import { DEFAULT_LOGGED_IN_REDIRECT, } from "@/config/routes";
import { handleValidationError, } from "@/shared/services/handle-validation.service";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

/**
 * Server-action of authorization
 * @param formData FormData
 * @param callbackUrl string
 * @used_in actions/auth/register.ts | LoginForm.tsx
 */
export async function login(formData: FormData, callbackUrl: string | null): Promise<ActionResponse> {
  const validated = LoginScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!validated.success) {
    return "error" in validated
      ? handleValidationError(validated)
      : response(null, "Invalid Fields");
  }

  const { email, password } = validated.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password)
    return response(null, "User not found")

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
      return response(null, error.type === "CredentialsSignin" ? "Invalid credentials" : "Something went wrong")
    } else {
      throw error;
    }
  }
}