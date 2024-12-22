import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    {
      name: 'vite-plugin-block-cookies',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          res.setHeader('Set-Cookie', ''); // Блокируем cookies
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
