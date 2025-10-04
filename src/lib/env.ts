export const env = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  },
  baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:5173',
}
