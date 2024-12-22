import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fable from "vite-plugin-fable"
import Inspect from "vite-plugin-inspect"

const currentDir = path.dirname(fileURLToPath(import.meta.url));
console.log("transpilling fsproj", currentDir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    Inspect(),
    fable(),
    react({ include: /\.(fs|js|jsx|ts|tsx)$/, jsxRuntime: "automatic" })
  ],
})

