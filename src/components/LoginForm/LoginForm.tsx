import { Flex } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { texts } from '@/lib/texts'

import { FormField } from '../FormField'
import { Button } from '../ui/button'
import { LoginFormProps, LoginSchema } from './types'

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: false
    },
    resolver: zodResolver(LoginSchema)
  })
  const { handleSubmit } = methods

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

          <FormField
            type="checkbox"
            name="remember"
            label={texts.form.rememberMe}
          />
        </Flex>

        <Button type="submit" size="xl" colorPalette="blue">
          {texts.form.login.submit}
        </Button>
      </form>
    </FormProvider>
  )
}
