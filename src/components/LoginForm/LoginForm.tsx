import { Flex, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod/v4'

import { texts } from '@/lib/texts'

import { ForgotPassword } from '../ForgotPassword'
import { FormField } from '../FormField'
import { Button } from '../ui/button'
import { useLogin } from './useLogin.hook'

export type LoginFormProps = {}

export const LoginSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8).max(20),
  })

export const LoginForm: React.FC<LoginFormProps> = () => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  })
  const { handleSubmit } = methods

  const { handleLogin, loading, error } = useLogin()

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Flex gap="5" direction="column">
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

        <ForgotPassword />

        <Button type="submit" size="xl" colorPalette="blue" loading={loading} disabled={loading} width="full">
          {texts.form.login}
        </Button>

        {error && <Text color="red.500" mt="3" textAlign="center">{error}</Text>}
      </form>
    </FormProvider>
  )
}
