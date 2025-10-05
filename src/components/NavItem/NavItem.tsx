import { Button, Icon } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

type Props = {
  icon?: IconType
  children: ReactNode
}

export const NavItem: React.FC<Props> = ({ icon, children }) => {
  return (
    <Button size="lg" w="full" variant="ghost" justifyContent="flex-start">
      {icon && <Icon mr="4" fontSize="16" as={icon} />}
      {children}
    </Button>
  )
}
