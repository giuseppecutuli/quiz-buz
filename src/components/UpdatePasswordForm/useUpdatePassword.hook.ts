import { useNavigate } from '@tanstack/react-router'
import { updatePassword } from 'firebase/auth'
import { useState } from 'react'

import { auth } from '@/lib/firebase.client'
import { texts } from '@/lib/texts'

import { toaster } from '../ui/toaster'

export type UpdatePasswordInput = {
  password: string
  confirmPassword: string
}

export const useUpdatePassword = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleUpdatePassword = async (data: UpdatePasswordInput) => {
    setLoading(true)
    setError(null)

    try {
      const user = auth.currentUser

      if (!user) {
        throw new Error('No authenticated user')
      }

      await updatePassword(user, data.password)

      toaster.success({
        title: texts.auth.updatePasswordSuccess,
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
    handleUpdatePassword,
  }
}
