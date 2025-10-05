import { Session, User } from '@supabase/supabase-js'
import { create } from 'zustand'

type State = {
  initialized: boolean
  session: Session | null
  user: User | null
}

type Action = {
  setInitialized: (initialized: boolean) => void
  setSession: (session: Session | null) => void
  setUser: (user: User | null) => void
}

export const useAuthStore = create<State & Action>(set => ({
  initialized: false,
  session: null,
  user: null,
  setInitialized: initialized => set({ initialized }),
  setSession: session => set({ session }),
  setUser: user => set({ user }),
}))
