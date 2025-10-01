import { RegisterPage } from '@/pages/Register'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
  beforeLoad: async ({ context }) => {
      const { user } = await context.waitForAuth()

      if (user) {
        throw redirect({ to: '/' })
      }
    },
})
