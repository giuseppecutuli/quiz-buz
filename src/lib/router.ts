import { User } from '@supabase/supabase-js'
import { createRouter } from '@tanstack/react-router'

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
