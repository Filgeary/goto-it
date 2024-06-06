// @ts-check
import react from '@vitejs/plugin-react'
import UnpluginInjectPreload from 'unplugin-inject-preload/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // preload all images (webp, svg)
    UnpluginInjectPreload({
      files: [
        {
          entryMatch: /[a-zA-Z0-9_-]*\.(webp|svg)$/,
        },
      ],
    }),
  ],
})
