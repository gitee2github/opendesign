import path from 'path';
import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
  publicDir: path.resolve(__dirname, './.vitepress/public'),
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './.vitepress')}/`,
      '@theme/': `${path.resolve(__dirname, './.vitepress/opendesign-theme')}/`,
    },
  },
  plugins: [
    vueJsx({}),
    Icons({
      compiler: 'vue3',
      customCollections: {
        app: FileSystemIconLoader(
          path.resolve(__dirname, './.vitepress/assets/svg-icons')
        ),
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  server: {
    https: true,
    port: 8888,
    proxy: {
      '/metadata': {
        target: 'https://api.test.osinfra.cn/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
