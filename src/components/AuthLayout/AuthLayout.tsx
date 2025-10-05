import { Flex, Image, Stack } from '@chakra-ui/react'

type AuthLayoutProps = {
  children: React.ReactNode
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Stack gap="8" h="100vh" direction={{ base: 'column', lg: 'row' }}>
      <Flex height={{ base: '1/2', lg: 'auto' }} flex={1} flexBasis={0} align="center" justify="center">
        <Stack p="4" gap={4} w="full" maxW="md">
          {children}
        </Stack>
      </Flex>
      <Flex height={{ base: '1/2', lg: 'auto' }} flex={1} flexBasis={0}>
        <Image
          w="full"
          alt="Login Image"
          objectFit="cover"
          src="/images/login-background.jpg"
        />
      </Flex>
    </Stack>
  )
}
