import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/summary': {
        target: 'https://api.covid19api.com/summary',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/summary/, ""),
      }
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://opendata.corona.go.jp/api',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   }
    // },
  },
  plugins: [
    vue(),
  ],
})
