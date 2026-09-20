import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base =
	process.env.GITHUB_PAGES === "true" ? "/TroisiUI-docs/" : "/";

export default defineConfig({
	base,
	plugins: [react()],
});
