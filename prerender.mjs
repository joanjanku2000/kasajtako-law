// Pas build-it: fut HTML-në e plotë brenda <div id="root"> që motorët e kërkimit
// ta lexojnë faqen pa ekzekutuar JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const indexPath = resolve(root, 'dist/index.html')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)
const html = render()

const template = readFileSync(indexPath, 'utf-8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  console.error('prerender: nuk u gjet <div id="root"></div> në dist/index.html')
  process.exit(1)
}

writeFileSync(indexPath, template.replace(marker, `<div id="root">${html}</div>`), 'utf-8')
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`prerender: u shtuan ${html.length} karaktere HTML në dist/index.html`)
