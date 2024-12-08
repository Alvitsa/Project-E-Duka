import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postcss from "postcss/lib/postcss";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    postcss({
      plugins: [autoprefixer],
      config: "./postcss.config.cjs",
    }),
  ],
  build: {
    sourcemap: true,
    assetsInclude: ['**/*.ttf'], // Include .ttf fonts
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split large libraries into separate chunks
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit
  },
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});