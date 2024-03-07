import { z, } from "zod";

import { MIN_PASSWORD_LENGTH, } from "../constants/constants";

export const UpdateEmailScheme = z.object({
  email: z.string().email({ message: "Valid email is required" })
})

export const UpdatePasswordScheme = z.object({
  password: z.string().min(MIN_PASSWORD_LENGTH, { message: "Password must contains at least 6 characters" }),
})

export const UpdateNameScheme = z.object({
  name: z.string().min(1, { message: "Valid name is required" })
})