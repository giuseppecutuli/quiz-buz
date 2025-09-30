import { PropsWithChildren } from 'react'

import { AuthContext, AuthContextType } from './auth.context'
import { useAuthLifecycle, useAuthStore } from '@/hooks'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  useAuthLifecycle()

  const { session } = useAuthStore()

  const value: AuthContextType = {
    session,
    user: session?.user ?? null,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
