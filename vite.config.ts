import preset from '@aklesky/vite-config/presets/base.js'
import { plugin } from '@aklesky/react-presets/plugins/vite.plugin.js'

const config = {
    ...preset,
    plugins: [plugin()],
}

export default config
