'use client'

import { LoginForm } from '@/components/LoginForm'
import {
  Flex,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react'

export const LoginPage: React.FC = () => {
  return (
    <Stack gap="8" h={'100vh'} direction={{ base: 'column', lg: 'row' }}>
      <Flex height={{ base: "1/2", lg: "auto" }} flex={1} flexBasis={0} align={'center'} justify={'center'}>
        <Stack p="4" gap={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <LoginForm onSubmit={console.log} />
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
