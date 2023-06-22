import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "PhotoList",
      filename: "remoteEntry.js",
      exposes: {
        "./PhotoList": "./src/PhotoList.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3003,
  },
});
