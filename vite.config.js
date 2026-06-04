import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const pages = [
  'history', 'geography', 'culture',
  'tourism', 'cuisine', 'economy', 'admin', 'letu'
]

const input = Object.fromEntries(
  pages.map(p => [p, resolve(__dirname, `${p}.html`)])
)

export default defineConfig({
  plugins: [vue()],
  base: process.env.BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...input
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
