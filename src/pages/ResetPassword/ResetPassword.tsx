import { Heading } from '@chakra-ui/react'

import { AuthLayout } from '@/components/AuthLayout'
import { UpdatePasswordForm } from '@/components/UpdatePasswordForm'
import { texts } from '@/lib/texts'

export const ResetPasswordPage: React.FC = () => {
  return (
    <AuthLayout>
      <Heading fontSize="2xl">{texts.auth.resetPassword}</Heading>
      <UpdatePasswordForm />
    </AuthLayout>
  )
}
