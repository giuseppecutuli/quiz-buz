import { useNavigate } from '@tanstack/react-router'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from 'react'

import { auth } from '@/lib/firebase.client'

export type RegisterFormInput = {
  first_name: string
  last_name: string
  email: string
  password: string
  confirmPassword: string
}

export const useRegister = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRegister = async (data: RegisterFormInput) => {
    setLoading(true)
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)

      await updateProfile(user, {
        displayName: `${data.first_name} ${data.last_name}`,
      })

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
    handleRegister,
  }
}
