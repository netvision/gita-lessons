import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Use environment variable or default to /gita-lessons/ for GitHub Pages
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/gita-lessons/' : '/',
  server: {
    port: 3000
  }
})
