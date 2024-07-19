import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
    define: {
    global: 'globalThis',
    'process.env.NEAR_NO_LOGS': true
  },
  build: {
    commonjsOptions: { include: [] },
  },
  resolve: {
    alias: {
      '@onmachina/nearauth-sdk-wallet': path.resolve(__dirname, '../nearauth-sdk-js/wallet')
    }
  }
})