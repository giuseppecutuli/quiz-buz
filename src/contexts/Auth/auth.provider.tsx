import { type PropsWithChildren } from 'react'

import { useAuthLifecycle, useAuthStore } from '@/hooks'

import { AuthContext, AuthContextType } from './auth.context'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  useAuthLifecycle()

  const { user } = useAuthStore()

  const value: AuthContextType = {
    user,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
