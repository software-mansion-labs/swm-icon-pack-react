import react from '@vitejs/plugin-react';
import { resolve } from 'pathe';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SwmIconPackReact',
      // the proper extensions will be added
      fileName: 'swm-icon-pack-react',
      formats: ['cjs', 'es', 'iife', 'umd'],
    },
  },
});
