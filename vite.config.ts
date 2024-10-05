import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config'; // Required for Vitest

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    css: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'some-other-folder-to-exclude'], 
    setupFiles:['./src/vitest-setup.ts'],
  },
});
