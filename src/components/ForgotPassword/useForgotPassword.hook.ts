import { useState } from 'react'

import { env } from '@/lib/env'
import { supabase } from '@/lib/supabase.client'

export type ForgotPasswordInput = {
  email: string;
}

export const useForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleForgotPassword = async (data: ForgotPasswordInput) => {
    setLoading(true)
    setSuccess(false)
    setError(null)

    const result = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${env.baseUrl}/reset-password`
    })

    if (result.error) {
      setError(result.error.message)
    } else {
      setSuccess(true)
    }

    setLoading(false)
  }

  const resetStatuses = () => {
    setLoading(false)
    setError(null)
    setSuccess(false)
  }

  return {
    loading,
    error,
    success,
    handleForgotPassword,
    resetStatuses,
  }
}
