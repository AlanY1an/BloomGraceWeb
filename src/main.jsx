import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <a href="#main-content" class="skiplink">Skip to main content</a>
    <App />
  </StrictMode>,
)
