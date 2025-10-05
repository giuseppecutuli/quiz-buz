import { useRouter } from '@tanstack/react-router'

import { supabase } from '@/lib/supabase.client'

export const useLogout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.navigate({ to: '/login' })
  }

  return {
    handleLogout
  }
}
