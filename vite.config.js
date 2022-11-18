import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { dependencies } from './package.json'

export default (args) => {
  console.log(args)
  const generateScopedName =
    args.mode === 'development' ? '[local]__[hash:base64:2]' : '[hash:base64:6]'
  const minify = args.mode === 'production'
  const sourcemap = args.mode === 'production' ? 'hidden' : 'inline'
  return defineConfig({
    server: {
      https: true,
      port: 8000
    },
    build: {
      sourcemap: sourcemap,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
            ...renderChunks(dependencies)
          }
        }
      }
    },
    esbuild: {
      minify
    },
    resolve: {
      alias: {
        components: path.resolve('src/components/'),
        hooks: path.resolve('src/hooks/'),
        assets: path.resolve('src/assets/'),
        context: path.resolve('src/context/'),
        pages: path.resolve('src/pages/'),
        services: path.resolve('src/services/'),
        utils: path.resolve('src/utils/'),
        styles: path.resolve('src/styles/')
      }
    },
    plugins: [react(), legacy(), mkcert(), svgr()],
    css: {
      modules: {
        generateScopedName,
        localsConvention: 'dashesOnly'
      }
    }
  })
}

function renderChunks(deps) {
  let chunks = {}
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}
