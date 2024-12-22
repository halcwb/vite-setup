import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fable from "vite-plugin-fable"
import Inspect from "vite-plugin-inspect"

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(currentDir, "src/Client");
const fsproj = path.join(root, "Client.fsproj");
console.log("transpilling fsproj", fsproj);

// https://vite.dev/config/
export default defineConfig({
  root : root,
  plugins: [
    Inspect(),
    fable({ fsproj }),
    react({ include: /\.(fs|js|jsx|ts|tsx)$/, jsxRuntime: "automatic" })
  ],
})

