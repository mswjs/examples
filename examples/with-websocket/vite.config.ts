/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    root: './src',
    setupFiles: ['./vitest.setup.ts'],
    environment: 'happy-dom',
    typecheck: {
      tsconfig: './tsconfig.test.json',
    },
  },
})
