import { AuthChangeEvent, Session } from '@supabase/supabase-js'
import { useEffect } from 'react'

import { supabase } from '@/lib/supabase.client'

import { useAuthStore } from './useAuthStore.hook'

export const useAuthLifecycle = () => {
  const { setInitialized, setSession, setUser } = useAuthStore()

  const onAuthStateChange = (event: AuthChangeEvent, session: Session | null) => {
    console.log('Auth event:', event)
    console.log('Session:', session)

    setSession(session)
    setUser(session?.user ?? null)
  }

  const initSession = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    setSession(session)
    setUser(session?.user ?? null)
    setInitialized(true)
  }

  useEffect(() => {
    initSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(onAuthStateChange)

    return () => subscription.unsubscribe()
  }, [])
}

