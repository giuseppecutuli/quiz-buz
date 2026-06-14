import { z } from 'zod/v4'

export const LoginSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8).max(20),
  })
