import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// Editing a log .md has no HMR boundary, so Vite full-reloads and the page
// jumps to the top. Swallow the update and tell LogEntry to refetch instead.
const logHmr = () => ({
  name: "log-md-hmr",
  handleHotUpdate({ file, server }) {
    if (!/[\\/]data[\\/]logs[\\/].+\.md$/.test(file)) return;
    server.ws.send({ type: "custom", event: "log-updated" });
    return [];
  },
});

// Windows throws EBUSY when a watched file (e.g. an image mid-copy) is locked,
// and an unhandled watcher 'error' kills the whole dev server. Log and carry on.
const surviveWatcherErrors = () => ({
  name: "survive-watcher-errors",
  configureServer(server) {
    server.watcher.on("error", (e) =>
      console.warn("watcher:", e.code ?? e.message),
    );
  },
});

export default defineConfig({
  plugins: [react(), logHmr(), surviveWatcherErrors()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
