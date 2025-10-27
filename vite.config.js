import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [
react({
eslint: {
failOnError: false, // Do not fail on ESLint errors
emitWarning: true, // Show warnings instead of errors
},
}),
],
});