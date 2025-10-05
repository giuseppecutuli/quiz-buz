import { createFileRoute, redirect } from '@tanstack/react-router'

import { RegisterPage } from '@/pages/Register'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
  beforeLoad: async ({ context }) => {
    const { user } = await context.waitForAuth()

    if (user) {
      throw redirect({ to: '/' })
    }
  },
})
