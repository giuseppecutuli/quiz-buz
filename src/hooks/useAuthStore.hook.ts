import type { User } from 'firebase/auth'
import { create } from 'zustand'

type State = {
  initialized: boolean
  user: User | null
}

type Action = {
  setInitialized: (initialized: boolean) => void
  setUser: (user: User | null) => void
}

export const useAuthStore = create<State & Action>(set => ({
  initialized: false,
  user: null,
  setInitialized: initialized => set({ initialized }),
  setUser: user => set({ user }),
}))
