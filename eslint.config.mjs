import { dirname } from 'path'
import { fileURLToPath } from 'url'
import nextConfig from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * ESLint flat config (ESLint 9+).
 * Replaces .eslintrc.json — equivalent to:
 *   { "extends": ["next/core-web-vitals", "next/typescript"] }
 *
 * eslint-config-next@16 exports arrays; spread them both.
 */
const config = [
  ...nextConfig,
  ...nextTypescript,
]

export default config
