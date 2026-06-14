import type { User } from 'firebase/auth'

import { useAuthStore } from '@/hooks'

export const waitForAuth = (): Promise<{ user: User | null }> => {
  const { initialized, user } = useAuthStore.getState()

  if (initialized) {
    return Promise.resolve({ user })
  }

  return new Promise((resolve) => {
    const unsubscribe = useAuthStore.subscribe(
      (state) => {
        if (state.initialized) {
          resolve({ user: state.user })
          unsubscribe()
        }
      },
    )
  })
}
