import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ECOMMERCE-WEBSITE',
  plugins: [react()],
  server: {port : 5174}
})
