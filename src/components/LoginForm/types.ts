import { z } from 'zod/v4'

export type LoginFormProps = {
  onSubmit: (data: LoginFormInput) => void;
  loading?: boolean;
  error?: string | null;
}

export type LoginFormInput = {
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
