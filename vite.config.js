import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-Ecommerce/", // Keep this for GitHub Pages or subfolder deployment
  plugins: [react(), tailwindcss()],
  server: {
    // Ensures React Router SPA works and static files in public/ load correctly
    fs: {
      strict: false,
    },
    historyApiFallback: true,
  },
});
