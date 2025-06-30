import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/CharitraPortfolio/', // Must match your GitHub repository name
  plugins: [react()],
})
