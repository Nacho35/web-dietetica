import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['node_modules/lodash/lodash.js'],
					app: ['./src/main.tsx'],
				},
			},
		},
	},
});
