import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2';
import { normalizePath } from 'vite';
import autoprefixer from 'autoprefixer';
import path from 'path';
// import viteEslint from 'vite-plugin-eslint'
// import viteStylelint from '@amatlash/vite-plugin-stylelint';

const variablePath = normalizePath(path.resolve('src/style/variable.scss'))

export default defineConfig({
  plugins: [
    createVuePlugin(), 
    // viteEslint(),
    // viteStylelint({
    //   exclude: /windicss|node_modules/
    // })
  ],
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
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
  
  
})
