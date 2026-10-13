import { defineConfig } from 'astro/config';

// Sitio 100% estático. `format: 'file'` conserva las URLs actuales
// (/pages/recursos.html) para no romper enlaces ni marcadores existentes.
export default defineConfig({
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
