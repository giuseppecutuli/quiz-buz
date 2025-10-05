import {
  Box,
  Drawer,
} from '@chakra-ui/react'
import { useState } from 'react'

import { Navbar } from '../Navbar'
import { Sidebar } from '../Sidebar'

type Props = {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Box minH="100vh" bg="gray.100">
      <Sidebar display={{ base: 'none', md: 'block' }} />
      <Drawer.Root size="full" open={open} onOpenChange={(e) => setOpen(e.open)} placement="start">
        <Drawer.Positioner>
          <Drawer.Content>
            <Sidebar onClose={() => setOpen(false)} />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
      <Navbar onOpen={() => setOpen(true)} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}
