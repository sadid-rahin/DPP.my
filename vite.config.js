import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this line to fix the blank screen on GitHub Pages
  base: '/DPP.my/',
})