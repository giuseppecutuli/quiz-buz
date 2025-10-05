import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react'
import { FiCompass, FiHome, FiSettings,FiStar, FiTrendingUp } from 'react-icons/fi'

import { NavItem } from '../NavItem'

const linkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
]

type Props = BoxProps & {
  onClose?: () => void
}

export const Sidebar: React.FC<Props> = ({ onClose, ...props }) => {
  return (
    <Box
      transition="3s ease"
      bg="white"
      borderRightWidth="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...props}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton onClick={onClose} display={{ base: 'flex', md: 'none' }} />
      </Flex>
      <Flex direction="column" gap="3" mx="4">
        {linkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  )
}
