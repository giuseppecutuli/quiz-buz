import { sendPasswordResetEmail } from 'firebase/auth'
import { useCallback, useState } from 'react'

import { env } from '@/lib/env'
import { auth } from '@/lib/firebase.client'

export type ForgotPasswordInput = {
  email: string
}

export const useForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleForgotPassword = async (data: ForgotPasswordInput) => {
    setLoading(true)
    setSuccess(false)
    setError(null)

    try {
      await sendPasswordResetEmail(auth, data.email, {
        url: `${env.baseUrl}/reset-password`,
      })
      setSuccess(true)
    }
    catch (err) {
      setError((err as Error).message)
    }
    finally {
      setLoading(false)
    }
  }

  const resetStatuses = useCallback(() => {
    setLoading(false)
    setError(null)
    setSuccess(false)
  }, [])

  return {
    loading,
    error,
    success,
    handleForgotPassword,
    resetStatuses,
  }
}
