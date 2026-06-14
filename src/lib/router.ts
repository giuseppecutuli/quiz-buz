import { createRouter } from '@tanstack/react-router'
import type { User } from 'firebase/auth'

import { AuthContextType } from '@/contexts/Auth'
import { routeTree } from '@/routeTree.gen'

import { waitForAuth } from './auth'

export type RouterContext = {
  auth: AuthContextType
  waitForAuth: () => Promise<{ user: User | null }>
}

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined!,
    waitForAuth,
  },
})
