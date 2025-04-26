import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    globals: true,
    coverage: {
      exclude: [
        'dist/*',
        'src/main.tsx',
        '*.config.ts',
        '*.config.js',
        'src/*.d.ts'
      ]
    },
  }
})
