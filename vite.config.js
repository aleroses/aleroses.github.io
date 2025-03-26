import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Cargar variables de entorno según el modo (dev/prod)
  // const env = loadEnv(mode, process.cwd(), "");

  // plugins: [react()],
  // base: "/aleroses.github.io/",

  /* esbuild: {
    loader: "jsx",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  }, */
  plugins: [react()],
  base:
    mode === "production" ? "/aleroses.github.io/" : "/", // ✔️ Solo aplica base en prod
  server: {
    open: true, // Abre automáticamente el navegador en http://localhost:5173
  },
}));
