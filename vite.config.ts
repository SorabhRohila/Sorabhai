import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// This creates the _redirects file automatically during build
function createVercelRedirects() {
  return {
    name: 'create-vercel-redirects',
    writeBundle() {
      const redirectsContent = '/* /index.html 200\n';
      fs.writeFileSync(path.resolve(__dirname, 'dist/_redirects'), redirectsContent);
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createVercelRedirects()],
})