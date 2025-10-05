import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Layout } from '@/components/Layout'

export const Route = createFileRoute('/__auth')({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  beforeLoad: async ({ context }) => {
    const { user } = await context.waitForAuth()

    if (!user) {
      throw redirect({ to: '/login' })
    }
  },
})
