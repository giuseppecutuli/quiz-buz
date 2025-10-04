'use client'

import { AuthLayout } from '@/components/AuthLayout';
import { Link } from '@/components/Link';
import { RegisterForm } from '@/components/RegisterForm';
import { texts } from '@/lib/texts';
import {
  Heading,
  Text,
} from '@chakra-ui/react'

export const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <Heading fontSize={'2xl'}>{texts.auth.signUpToYourAccount}</Heading>
      <RegisterForm />
      <Text fontSize={'sm'} color={'gray.600'}>
        {texts.auth.doYouAlreadyHaveAnAccount} <Link to="/login" chakraProps={{ color: 'blue.400', fontWeight: 'bold' }}>{texts.auth.signIn}</Link>
      </Text>
    </AuthLayout>
  )
}
