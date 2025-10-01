import { Flex, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod/v4'

import { texts } from '@/lib/texts'

import { FormField } from '../FormField'
import { Button } from '../ui/button'

export type RegisterFormProps = {
  onSubmit: (data: RegisterFormInput) => void;
  loading?: boolean;
  error?: string | null;
}

export type RegisterFormInput = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterSchema = z
  .object({
    first_name: z.string().min(1).max(50),
    last_name: z.string().min(1).max(50),
    email: z.email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: texts.form.passwordNotMatch,
    path: ['confirmPassword'],
  })

export const RegisterForm = ({ onSubmit, error, loading }: RegisterFormProps) => {
  const methods = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(RegisterSchema)
  })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="5" direction="column" mb="5">
          <FormField
            type="text"
            name="first_name"
            placeholder={texts.form.enterFirstName}
            label={texts.form.firstName}
            required
          />

          <FormField
            type="text"
            name="last_name"
            placeholder={texts.form.enterLastName}
            label={texts.form.lastName}
            required
          />

          <FormField
            type="email"
            name="email"
            placeholder={texts.form.enterEmail}
            label={texts.form.email}
            required
          />

          <FormField
            type="password"
            name="password"
            placeholder={texts.form.enterPassword}
            label={texts.form.password}
            required
          />

          <FormField
            type="password"
            name="confirmPassword"
            placeholder={texts.form.confirmPassword}
            label={texts.form.password}
            required
          />
        </Flex>

        <Button type="submit" size="xl" colorPalette="blue" loading={loading} disabled={loading} width="full">
          {texts.form.register}
        </Button>

        {error && <Text color="red.500" mt="3" textAlign="center">{error}</Text>}
      </form>
    </FormProvider>
  )
}
