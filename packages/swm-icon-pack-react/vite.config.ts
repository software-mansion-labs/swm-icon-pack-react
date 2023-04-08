import react from '@vitejs/plugin-react';
import { resolve } from 'pathe';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'SwmIconPackReact',
      // the proper extensions will be added
      fileName: 'swm-icon-pack-react',
    },
  },
});
