import { useRouter } from '@tanstack/react-router'
import { signOut } from 'firebase/auth'

import { auth } from '@/lib/firebase.client'

export const useLogout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.navigate({ to: '/login' })
  }

  return {
    handleLogout,
  }
}
