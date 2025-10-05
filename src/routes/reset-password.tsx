import { createFileRoute, redirect } from '@tanstack/react-router'

import { ResetPasswordPage } from '@/pages/ResetPassword'

export const Route = createFileRoute('/reset-password')({
  component: ResetPasswordPage,
  beforeLoad: async ({ context }) => {
    const { user } = await context.waitForAuth()

    if (!user) {
      throw redirect({ to: '/' })
    }
  },
})
