import { PropsWithChildren } from 'react'

import { useAuthLifecycle, useAuthStore } from '@/hooks'

import { AuthContext, AuthContextType } from './auth.context'

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
