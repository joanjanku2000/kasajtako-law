// Përdoret vetëm gjatë build-it (prerender.mjs) për të gjeneruar HTML statik.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function render() {
  return renderToString(<App />)
}
