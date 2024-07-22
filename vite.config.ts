import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'node:path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': join(__dirname, './src/'),
        },
    },
})
