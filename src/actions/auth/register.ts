"use server";

import bcrypt from "bcryptjs";

import { login, } from "@/actions/auth/login";
import { getUserByEmail, } from "@/actions/user/get-user-by-email";
import { RegisterScheme, } from "@/app/(public)/auth/_module/schemes/register.scheme";
import { database, } from "@/config/database.config";
import { handleValidationError, } from "@/shared/services/handle-validation.service";
import { response, } from "@/shared/services/response.service";
import { ActionResponse, } from "@/types/action-response";

/**
 * Server-action of authorization
 * @param formData FormData
 * @param callbackUrl string
 * @used_in actions/auth/register.ts | LoginForm.tsx
 */

/**
 * Server-action of registration using credentials
 * @param formData FormData
  @used_in RegisterForm.tsx
 */
export async function register(formData: FormData): Promise<ActionResponse> {
  const validated = RegisterScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name")
  });

  if (!validated.success) {
    return "error" in validated
      ? handleValidationError(validated)
      : response(null, "Invalid Fields");
  }

  const { email, password, name } = validated.data;

  const isEmailTaken = !!await getUserByEmail(email);
  if (isEmailTaken) return response(null, "Email is alredy in use");

  const hashPassword = await bcrypt.hash(password, 10);

  await database.user.create({
    data: {
      email,
      name,
      password: hashPassword
    }
  });

  const loginFormData = new FormData();
  loginFormData.append("email", email);
  loginFormData.append("password", password);

  return await login(loginFormData, null);
}