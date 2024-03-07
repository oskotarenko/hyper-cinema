import { z, } from "zod";

import { MIN_PASSWORD_LENGTH, } from "../constants/constants";

export const RegisterScheme = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(MIN_PASSWORD_LENGTH, { message: "Password must contains at least 6 characters" }),
  name: z.string().min(1, { message: "Name is required" }),
});
