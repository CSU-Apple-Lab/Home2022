import { sveltekit } from '@sveltejs/kit/vite';


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		watch: {
			ignored: ['!**/node_modules/your-package-name/**']
		}
	}
};

export default config;
