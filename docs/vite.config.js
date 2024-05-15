import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://priya140895.github.io/VitePress_Documentation/
export default defineConfig({
  plugins: [react()],
  base: '/VitePress_Documentation/',
})