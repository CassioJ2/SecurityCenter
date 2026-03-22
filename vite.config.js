import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' && process.env.GITHUB_ACTIONS === 'true' ? '/SecurityCenter/' : '/',
  plugins: [react()],
}));
