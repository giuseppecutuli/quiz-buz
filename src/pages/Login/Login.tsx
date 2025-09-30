'use client'

import { LoginForm, LoginFormInput } from '@/components/LoginForm'
import { supabase } from '@/lib/supabase.client';
import {
  Flex,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (data: LoginFormInput) => {
    setLoading(true);
    setError(null);

    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      navigate({ to: '/' })
    }

    setLoading(false);
  };

  return (
    <Stack gap="8" h={'100vh'} direction={{ base: 'column', lg: 'row' }}>
      <Flex height={{ base: "1/2", lg: "auto" }} flex={1} flexBasis={0} align={'center'} justify={'center'}>
        <Stack p="4" gap={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <LoginForm loading={loading} error={error} onSubmit={handleLogin} />
        </Stack>
      </Flex>
      <Flex height={{ base: "1/2", lg: "auto" }} flex={1} flexBasis={0}>
        <Image
          w="full"
          alt={'Login Image'}
          objectFit={'cover'}
          src="/images/login-background.jpg"
        />
      </Flex>
    </Stack>
  )
}
