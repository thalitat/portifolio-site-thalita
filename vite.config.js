import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const rootDirectory = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/portifolio-site-thalita/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDirectory, 'index.html'),
        projects: resolve(rootDirectory, 'projetos/index.html'),
        services: resolve(rootDirectory, 'servicos/index.html'),
        talks: resolve(rootDirectory, 'palestras/index.html'),
        volunteering: resolve(rootDirectory, 'voluntariado/index.html'),
        contact: resolve(rootDirectory, 'contato/index.html')
      }
    }
  },
  server: {
    host: '127.0.0.1',
    port: 5175,
    strictPort: true,
  },
})
