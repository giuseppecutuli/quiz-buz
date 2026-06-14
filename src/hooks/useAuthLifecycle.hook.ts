import type { User } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { useCallback, useEffect } from 'react'

import { auth } from '@/lib/firebase.client'

import { useAuthStore } from './useAuthStore.hook'

export const useAuthLifecycle = () => {
  const { setInitialized, setUser } = useAuthStore()

  const handleUser = useCallback(
    (user: User | null) => {
      setUser(user)
      setInitialized(true)
    },
    [setUser, setInitialized],
  )

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser)

    return unsubscribe
  }, [handleUser])
}
