import { z } from 'zod/v4'

export type LoginFormProps = {
  onSubmit: (data: FormInput) => void;
}

export type FormInput = {
  email: string;
  password: string;
  remember: boolean;
}

export const LoginSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8).max(20),
    remember: z.boolean(),
  })
