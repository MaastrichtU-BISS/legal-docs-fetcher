import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Alias the package name to import directly from source
      'legal-docs-fetcher': resolve(__dirname, '../src/index.ts'),
      // Alias for easier imports in test files
      '@': resolve(__dirname, '../src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.caselawexplorer.tech',
        changeOrigin: true
      }
    }
  }
})
