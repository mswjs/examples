import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import { build } from 'tsup'

const PUBLIC_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  './public',
)

async function startServer() {
  await build({
    entry: ['./index.ts'],
    outDir: './public/build',
    format: 'esm',
    platform: 'browser',
    target: 'chrome120',
    noExternal: [/.+/],
    splitting: false,
    watch: true,
  })

  const app = fastify()

  app.register(fastifyStatic, {
    root: PUBLIC_PATH,
  })

  const url = await app.listen({ port: 3000 })
  console.log(`Application is running at ${url}`)
}

startServer()
