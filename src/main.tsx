import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/App.css'
import App from './App.tsx'
import "primeflex/primeflex.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
