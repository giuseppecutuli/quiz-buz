import { createFileRoute, Outlet, redirect, useRouter } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase.client'

export const Route = createFileRoute('/__auth')({
  component: AuthLayout,
  beforeLoad: async ({ context }) => {
    const { user } = await context.waitForAuth()

    if (!user) {
      throw redirect({ to: '/login' })
    }
  },
})

function AuthLayout() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.navigate({ to: '/login' })
  }

  return (
    <div className="p-2 h-full">
      <h1>Authenticated Route</h1>
      <p>This route's content is only visible to authenticated users.</p>
      <hr />
      <Button onClick={handleLogout}>Logout</Button>
      <Outlet />
    </div>
  )
}
