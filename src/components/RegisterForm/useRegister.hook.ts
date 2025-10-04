import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import { supabase } from '@/lib/supabase.client'

export type RegisterFormInput = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useRegister = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async (data: RegisterFormInput) => {
    setLoading(true)
    setError(null)

    console.log(data)

    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
        }
      }
    })

    if (result.error) {
      setError(result.error.message)
    } else {
      navigate({ to: '/' })
    }

    setLoading(false)
  }

  return {
    loading,
    error,
    handleRegister,
  }
}
