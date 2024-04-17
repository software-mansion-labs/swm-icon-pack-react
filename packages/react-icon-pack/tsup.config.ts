import { defineConfig } from 'tsup'
import svgr from 'esbuild-plugin-svgr'

export default defineConfig({
  esbuildPlugins: [
    svgr({
      replaceAttrValues: { 'black': 'currentColor' }
    })
  ],
});