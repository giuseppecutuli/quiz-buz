import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import { supabase } from '@/lib/supabase.client'

export type LoginFormInput = {
  email: string
  password: string
}

export const useLogin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (data: LoginFormInput) => {
    setLoading(true)
    setError(null)

    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (result.error) {
      setError(result.error.message)
    }
    else {
      navigate({ to: '/' })
    }

    setLoading(false)
  }

  return {
    loading,
    error,
    handleLogin,
  }
}
