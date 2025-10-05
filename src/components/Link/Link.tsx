import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from '@tanstack/react-router'

export type LinkProps = {
  chakraProps?: ChakraLinkProps
  routerProps?: RouterLinkProps
  to: RouterLinkProps['to']
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ chakraProps, routerProps, to, children }) => {
  return (
    <ChakraLink asChild {...chakraProps}>
      <RouterLink {...routerProps} to={to}>
        {children}
      </RouterLink>
    </ChakraLink>
  )
}
