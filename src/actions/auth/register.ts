"use server";

import bcrypt from "bcryptjs";

import { login, } from "@/actions/auth/login";
import { getUserByEmail, } from "@/actions/user/get-user-by-email";
import { RegisterScheme, } from "@/app/(public)/auth/_module/schemes/register.scheme";
import { database, } from "@/config/database.config";

export async function register(formData: FormData) {
  const validatedFields = RegisterScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name")
  });

  if (!validatedFields.success) return { error: "Invalid fileds" }

  const { email, password, name } = validatedFields.data;

  if (!email || !password || !name)
    return { error: "Invalid fields" };

  const isEmailTaken = !!await getUserByEmail(email);
  if (isEmailTaken) return { error: "Email already in use" };

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