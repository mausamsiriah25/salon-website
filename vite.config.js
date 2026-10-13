import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE THIS to your GitHub repository name (project sites live at user.github.io/<REPO>/).
// For a user/org site (user.github.io) or a custom domain, set REPO = '' .
const REPO = 'salon-website'

export default defineConfig(({ command }) => ({
  base: command === 'build' && REPO ? `/${REPO}/` : '/',
  plugins: [react()],
}))
