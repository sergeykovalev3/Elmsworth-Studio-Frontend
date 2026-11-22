import { readFileSync } from 'node:fs'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const screenSource = readFileSync(new URL('./src/styles/screens.ts', import.meta.url), 'utf8')
const screens = Object.fromEntries(
  [...screenSource.matchAll(/(\w+):\s*(\d+)/g)].map(([, name, width]) => [name, Number(width)]),
)

function breakpoints() {
  const widths = Object.entries(screens).map(([name, width]) => [`--bp-${name}`, `${width}px`])
  return {
    postcssPlugin: 'breakpoints',
    Once(root) {
      root.walkRules(':root', (rule) => {
        for (const [prop, value] of widths) {
          const exists = rule.nodes.some((node) => node.type === 'decl' && node.prop === prop)
          if (!exists) rule.append({ prop, value })
        }
      })
      root.walkAtRules('media', (rule) => {
        rule.params = rule.params.replace(/var\(--bp-([a-z]+)\)/g, (match, name) => {
          const width = screens[name]
          return width ? `${width}px` : match
        })
      })
    },
  }
}

breakpoints.postcss = true

export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
  ],
  css: {
    postcss: {
      plugins: [breakpoints()],
    },
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': process.env.API_PROXY ?? 'http://127.0.0.1:3001',
    },
  },
})
