import {
  createFileRoute,
  redirect,
} from '@tanstack/react-router'

import { LoginPage } from '@/pages/Login'

export const Route = createFileRoute('/login')({
  component: LoginPage,
  beforeLoad: async ({ context }) => {
    const { user } = await context.waitForAuth()

    if (user) {
      throw redirect({ to: '/' })
    }
  },
})
