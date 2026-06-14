import { useNavigate } from '@tanstack/react-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

import { auth } from '@/lib/firebase.client'

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

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
      navigate({ to: '/' })
    }
    catch (err) {
      setError((err as Error).message)
    }
    finally {
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    handleLogin,
  }
}
