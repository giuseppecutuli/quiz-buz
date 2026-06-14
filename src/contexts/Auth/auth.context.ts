import type { User } from 'firebase/auth'
import { createContext } from 'react'

export type AuthContextType = {
  user: User | null
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
})
