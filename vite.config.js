import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/beshify/",
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser
  },
})
