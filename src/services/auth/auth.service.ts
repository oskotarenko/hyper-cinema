"use server";

import bcrypt from "bcryptjs";
import { AuthError, } from "next-auth";

import { signIn, signOut, } from "../../config/auth";
import { database, } from "../../config/database.config";
import { DEFAULT_LOGGED_IN_REDIRECT, } from "../../config/routes";
import { LoginScheme, RegisterScheme, } from "../../schemes";
import { getUserByEmail, } from "../user/user.service";

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

// Allows to do something on user logout and also can be use in client components
export async function logout() {
  await signOut()
}