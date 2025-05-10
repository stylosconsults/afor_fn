import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "email is required").trim().email(),
  password: z.string().min(1, "password field is empty"),
});