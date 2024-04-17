import { defineConfig } from 'tsup'
import svgr from 'esbuild-plugin-svgr'

export default defineConfig({
  format: ['cjs', 'esm'],
  dts: true,
  esbuildPlugins: [
    svgr({
      replaceAttrValues: { 'black': 'currentColor' }
    })
  ],
});