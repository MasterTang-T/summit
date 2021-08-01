import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "components": path.resolve(__dirname, 'src/components'),
      "views": path.resolve(__dirname, 'src/views'),
      "routers": path.resolve(__dirname, 'src/routers'),
      "utils": path.resolve(__dirname, 'src/utils'),
    }
  },
  plugins: [vue(), styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style`,
      },
    ],
  }),]
})
