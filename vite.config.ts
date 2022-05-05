import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), svelte()],
})
