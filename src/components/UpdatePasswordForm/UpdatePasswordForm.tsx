import { Button, Flex, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod/v4'

import { texts } from '@/lib/texts'

import { FormField } from '../FormField'
import { useUpdatePassword } from './useUpdatePassword.hook'

export const UpdatePasswordSchema = z
  .object({
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: texts.form.passwordNotMatch,
    path: ['confirmPassword'],
  })

export const UpdatePasswordForm: React.FC = () => {
  const methods = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(UpdatePasswordSchema),
  })
  const { handleSubmit } = methods

  const { handleUpdatePassword, loading, error } = useUpdatePassword()

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleUpdatePassword)}>
        <Flex gap="5" direction="column" mb="5">
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
            placeholder={texts.form.enterPassword}
            label={texts.form.confirmPassword}
            required
          />
        </Flex>

        <Button type="submit" size="xl" colorPalette="blue" loading={loading} disabled={loading} width="full">
          {texts.form.updatePassword}
        </Button>

        {error && <Text color="red.500" mt="3" textAlign="center">{error}</Text>}
      </form>
    </FormProvider>
  )
}
