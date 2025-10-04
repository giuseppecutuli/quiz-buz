import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import { supabase } from '@/lib/supabase.client'
import { texts } from '@/lib/texts'

import { toaster } from '../ui/toaster'

export type UpdatePasswordInput = {
  password: string;
  confirmPassword: string;
}

export const useUpdatePassword = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUpdatePassword = async (data: UpdatePasswordInput) => {
    setLoading(true)
    setError(null)

    const result = await supabase.auth.updateUser({
      password: data.password,
    })

    if (result.error) {
      setError(result.error.message)
    } else {
      toaster.success({
        title: texts.auth.updatePasswordSuccess,
      })
      navigate({ to: '/' })
    }

    setLoading(false)
  }

  return {
    loading,
    error,
    handleUpdatePassword,
  }
}
