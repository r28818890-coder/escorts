import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    build: {
      outDir: 'dist',
      sourcemap: false, // Production mein map files nahi chahiye (saves size)
      chunkSizeWarningLimit: 1000,
      minify: 'esbuild',
      cssMinify: 'esbuild',
      target: 'es2015',
      cssCodeSplit: true, // CSS ko bhi alag-alag files mein todega
      rollupOptions: {
        output: {
          // Intelligent Chunk Splitting
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // 1. React Core (Sabse pehle load hona chahiye)
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react-vendor';
              }
              // 2. Heavy Animations (Baad mein load ho sakti hain)
              if (id.includes('framer-motion')) {
                return 'animation-vendor';
              }
              // 3. Icons (Lucide heavy hota hai, ise alag rakha)
              if (id.includes('lucide-react')) {
                return 'icons-vendor';
              }
              // 4. Charts/Data Vis
              if (id.includes('d3')) {
                return 'd3-vendor';
              }
              // 5. Baki sab libraries ek saath
              return 'vendor';
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'd3', 'lucide-react'],
    },
  };
});