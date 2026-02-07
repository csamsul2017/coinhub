import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['chr.samsuldev.my.id', 'ocean.samsuldev.my.id'],
    proxy: {
      '/api': {
        target: 'https://anaf17-coinhub.hf.space',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
