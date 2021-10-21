import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr';
// const reactSvgPlugin = require('vite-plugin-react-svg');
// import eslintPlugin from 'vite-plugin-eslint';
// const reactRefresh = require('@vitejs/plugin-react-refresh');



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    react(),
    svgr(),
    // reactSvgPlugin(),
    // reactRefresh(),
    // eslintPlugin()
  ]
})
