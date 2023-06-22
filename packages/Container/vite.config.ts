import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        PhotoList: "http://localhost:3003/dist/assets/remoteEntry.js",
        PhotoDetail: "http://localhost:3002/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 3001,
  },
});
