import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PublicHolidays from './PublicHolidays.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PublicHolidays />
  </StrictMode>,
)
