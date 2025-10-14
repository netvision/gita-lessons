import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Using custom domain, so base path is root
export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 3000
  }
})
