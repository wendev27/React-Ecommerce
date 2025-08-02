import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // ✅ Fixes wrong asset paths on Vercel
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
  },
});
