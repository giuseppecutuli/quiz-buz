import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as UiProvider } from '@/components/ui/provider'

import { AuthProvider, useAuth } from './contexts/Auth'
// Import the generated route tree
import { waitForAuth } from './lib/auth'
import { router } from './lib/router'


// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const Router = () => {
  const auth = useAuth()

  const context = {
    auth,
    waitForAuth,
  }

  return <RouterProvider router={router} context={context} />
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <UiProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </UiProvider>
    </StrictMode>,
  )
}
