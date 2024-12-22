import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; 

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), 
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
