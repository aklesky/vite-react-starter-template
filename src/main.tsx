import { renderApp } from '@aklesky/react-presets/client/render.js'
import React from 'react'
import App from './app/app.tsx'
import './index.scss'

renderApp('root', () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
))
