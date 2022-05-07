import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2';
import { normalizePath } from 'vite';
import autoprefixer from 'autoprefixer';
import path from 'path';

const variablePath = normalizePath(path.resolve('src/style/variable.scss'))

export default defineConfig({
  plugins: [createVuePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  },
  server: {
    open: true
  }
  
  
})
