// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensure this entry is correct if specified
  build: {
    rollupOptions: {
      input: '/src/Main.jsx', // Ensure this points to the correct entry file
    },
  },
});
