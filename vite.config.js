import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: true,
	},
	resolve: {
		alias: {
			components: '/src/components',
			data: '/src/data',
			styles: '/src/styles',
			tabs: '/src/tabs',
			hooks: '/src/hooks',
			helpers: '/src/helpers',
			services: '/src/services',
		},
	},
});
