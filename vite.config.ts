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
      target: 'esnext',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Intelligent Performance Chunk Splitting
          manualChunks(id) {
            // 0. High-Volume Data Slices Splitting
            if (id.includes('scheduledBlogs')) {
              return 'blogs-data';
            }
            if (id.includes('scheduledBacklinks')) {
              return 'backlinks-data';
            }
            if (id.includes('portalData')) {
              return 'classifieds-data';
            }

            if (id.includes('node_modules')) {
              // 1. React 19 Core
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'react-vendor';
              }
              // 2. Animations (framer-motion, lenis)
              if (id.includes('framer-motion') || id.includes('lenis')) {
                return 'animation-vendor';
              }
              // 3. Lucide Icons
              if (id.includes('lucide-react')) {
                return 'icons-vendor';
              }
              // 4. Charts / Data visualization
              if (id.includes('d3') || id.includes('recharts')) {
                return 'chart-vendor';
              }
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