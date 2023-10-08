import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
	  plugins: [
	  	    VitePWA({ 
				registerType: 'autoUpdate',
				injectRegister: 'auto',
				devOptions: {
					enabled: true
				},
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}']
				},
				includeAssets: ['favicon.ico'],
				manifest: {
				  name: 'Bills',
				  short_name: 'Bills',
				  description: 'Photo App with Vite',
				  theme_color: '#000000'
				  // icons: [
					// {
          //   src: '/icons/inser_icon_img',
					//   sizes: '128x128',
					//   type: 'image/png'
					// },
					// {
					//   src: '/icons/bills-512x512.png',
					//   sizes: '512x512',
					//   type: 'image/png'
					// }
				  // ]
				}
			})
	  	]
    })
	  

