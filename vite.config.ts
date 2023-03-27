import { resolve } from 'path'
import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  build: {
    minify: 'esbuild',
    emptyOutDir: true,
    lib: {
      formats: ['es', 'cjs', 'iife'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JustSimpleLog'
    }
  },
})
