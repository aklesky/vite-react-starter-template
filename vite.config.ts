// noinspection JSUnusedGlobalSymbols

import preset from '@aklesky/vite-config/presets/base.js'
import { defineConfig } from '@aklesky/vite-config/vite.js'
import { plugin } from '@aklesky/react-presets/plugins/vite.plugin.js'

const config = defineConfig({
    ...preset,
    plugins: [plugin()],
})

export default config
