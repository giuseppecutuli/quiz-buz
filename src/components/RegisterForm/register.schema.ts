import { z } from 'zod/v4'

import { texts } from '@/lib/texts'

export const RegisterSchema = z
  .object({
    first_name: z.string().min(1).max(50),
    last_name: z.string().min(1).max(50),
    email: z.email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: texts.form.passwordNotMatch,
    path: ['confirmPassword'],
  })
