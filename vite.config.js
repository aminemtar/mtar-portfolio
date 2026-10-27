import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages uses /mtar-portfolio/; Netlify deploys at the domain root.
const isNetlify = process.env.NETLIFY === 'true'

export default defineConfig({
  plugins: [react()],
  base: isNetlify ? '/' : '/mtar-portfolio/',
})
