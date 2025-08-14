import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomHooksDemo from './CustomHooksDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomHooksDemo />
  </StrictMode>,
)
