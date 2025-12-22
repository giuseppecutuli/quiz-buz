import { Flex, IconButton, Text } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { useAuth } from '@/contexts/Auth'
import { useLogout } from '@/hooks/useLogout'
import { texts } from '@/lib/texts'

import { User } from '../User'

type Props = {
  onOpen?: () => void
}

export const Navbar: React.FC<Props> = ({ onOpen }) => {
  const { user } = useAuth()
  const { handleLogout } = useLogout()

  const fullName = user?.user_metadata.first_name + ' ' + user?.user_metadata.last_name

  const actions = [
    { label: texts.auth.logout, onClick: handleLogout },
  ]

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        variant="outline"
        aria-label="open menu"
        onClick={onOpen}
      >
        <FiMenu />
      </IconButton>
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>
      <User fullName={fullName} actions={actions} />
    </Flex>
  )
}
