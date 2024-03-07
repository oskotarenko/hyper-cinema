import { z, } from "zod";

export const LoginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string())
});