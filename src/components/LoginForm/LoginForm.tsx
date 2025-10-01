import { Flex, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod/v4'

import { texts } from '@/lib/texts'

import { FormField } from '../FormField'
import { Button } from '../ui/button'
import { ForgotPassword } from '../ForgotPassword'

export type LoginFormProps = {
  onSubmit: (data: LoginFormInput) => void;
  onForgotPassword?: (email?: string) => void;
  loading?: boolean;
  error?: string | null;
}

export type LoginFormInput = {
  email: string;
  password: string;
}

export const LoginSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8).max(20),
  })

export const LoginForm = ({ onSubmit, error, loading, onForgotPassword }: LoginFormProps) => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema)
  })
  const { handleSubmit, getValues } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="5" direction="column" mb="5">
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
        </Flex>

        <ForgotPassword email={getValues('email')} />

        <Button type="submit" size="xl" colorPalette="blue" loading={loading} disabled={loading} width="full">
          {texts.form.login}
        </Button>

        {error && <Text color="red.500" mt="3" textAlign="center">{error}</Text>}
      </form>
    </FormProvider>
  )
}
