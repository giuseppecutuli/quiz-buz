'use client'

import { AuthLayout } from '@/components/AuthLayout';
import { Link } from '@/components/Link';
import { LoginForm } from '@/components/LoginForm'
import { texts } from '@/lib/texts';
import {
  Heading,
  Text,
} from '@chakra-ui/react'

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <Heading fontSize={'2xl'}>{texts.auth.signInToYourAccount}</Heading>
      <LoginForm />
      <Text fontSize={'sm'} color={'gray.600'}>
        {texts.auth.doYouNeedAnAccount} <Link to="/register" chakraProps={{ color: 'blue.400', fontWeight: 'bold' }}>{texts.auth.signUp}</Link>
      </Text>
    </AuthLayout>
  )
}
