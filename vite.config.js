import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		watch: {
			ignored: ['!**/node_modules/your-package-name/**']
		},
		hmr: {
			port: 4173
		},
		port: 5173
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	}
};

export default config;
