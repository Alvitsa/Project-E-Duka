import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000, // Adjust if large dependencies exist
  },
  resolve: {
    alias: {
      src: resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": {}, // Optional, remove if unused
  },
});