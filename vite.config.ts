import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // URL pública do site — fallback para o domínio principal.
  // Substitui %VITE_SITE_URL% no index.html em build/dev.
  const SITE_URL = env.VITE_SITE_URL || 'https://iprotector.com.br';

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_SITE_URL': JSON.stringify(SITE_URL),
    },
  };
});
