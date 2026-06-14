import { z } from 'zod/v4'

import { texts } from '@/lib/texts'

export const UpdatePasswordSchema = z
  .object({
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: texts.form.passwordNotMatch,
    path: ['confirmPassword'],
  })
