import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // this proxy:  since we're not using CORS
    proxy: {
      "/api/": "http://localhost:8001/",
    },
  },
  plugins: [react()],
});
