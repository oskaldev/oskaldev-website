import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [],
  css: {
    postcss: {
      plugins: [ tailwindcss ],
    },
  },
  resolve: {
    alias: {
      'components': '/src/components',
      'data': '/src/data',
      'helpers': '/src/helpers',
      'hooks': '/src/hooks',
      'providers': '/src/providers',
      'animations': '/src/animations'
    }
  },

})