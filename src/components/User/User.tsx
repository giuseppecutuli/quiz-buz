import { Avatar as ChakraAvatar,Box, Button, Flex, HStack, Menu, Portal, Text, VStack } from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

type Action = {
  onClick: () => void
  label: string
}

type Props = {
  fullName: string
  avatar?: string
  actions?: Action[]
}

export const User: React.FC<Props> = ({ fullName, avatar, actions }) => {
  return (
    <Flex alignItems={'center'}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="plain" outline="none">
            <HStack>
              <ChakraAvatar.Root>
                <ChakraAvatar.Fallback name={fullName} />
                <ChakraAvatar.Image src={avatar} />
              </ChakraAvatar.Root>
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                gap="1px"
                ml="2"
              >
                <Text fontSize="sm">{fullName}</Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {actions?.map((action) => (
                <Menu.Item key={action.label} value={action.label} onClick={action.onClick}>
                  {action.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  )
}
