import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodeResolve from "@rollup/plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/L-Odin6-SignUpForm/",
  plugins: [react(), nodeResolve()],
});
