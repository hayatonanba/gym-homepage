import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './header.jsx'

createRoot(document.getElementById('demo')).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
