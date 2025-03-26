import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Cargar variables de entorno según el modo (dev/prod)
  // const env = loadEnv(mode, process.cwd(), "");

  plugins: [react()],
  base:
    mode === "production" ? "/aleroses.github.io/" : "/",
  server: {
    open: true,
  },

  esbuild: {
    loader: "jsx",
    include: /\.(jsx|js)$/,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
}));
