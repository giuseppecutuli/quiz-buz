'use client'

import { AuthLayout } from '@/components/AuthLayout';
import { Link } from '@/components/Link';
import { LoginForm, LoginFormInput } from '@/components/LoginForm'
import { RegisterForm, RegisterFormInput } from '@/components/RegisterForm';
import { supabase } from '@/lib/supabase.client';
import { texts } from '@/lib/texts';
import {
  Heading,
  Text,
} from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (data: RegisterFormInput) => {
    setLoading(true);
    setError(null);

    console.log(data);

    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
        }
      }
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      navigate({ to: '/' })
    }

    setLoading(false);
  };

  return (
    <AuthLayout>
      <Heading fontSize={'2xl'}>{texts.auth.signUpToYourAccount}</Heading>
      <RegisterForm loading={loading} error={error} onSubmit={handleRegister} />
      <Text fontSize={'sm'} color={'gray.600'}>
        {texts.auth.doYouAlreadyHaveAnAccount} <Link to="/login" chakraProps={{ color: 'blue.400', fontWeight: 'bold' }}>{texts.auth.signIn}</Link>
      </Text>
    </AuthLayout>
  )
}
