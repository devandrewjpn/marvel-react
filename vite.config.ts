import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets'
import { VitePWA } from 'vite-plugin-pwa'

import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest,
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            devOptions: {
                enabled: false, // switch to "true" to enable sw on development
            },
            workbox: {
                globPatterns: ['*/.{js,css,html}', '*/.{svg,png,jpg,gif}'],
            },
        }),
        imagePresets({
            thumbnail: widthPreset({
                class: 'img thumb',
                loading: 'lazy',
                widths: [48, 96],
                formats: {
                    webp: { quality: 50 },
                    jpg: { quality: 70 },
                    png: { quality: 70 },
                },
            }),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
