import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PublicHolidays from './components/PublicHolidays'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PublicHolidays></PublicHolidays>
  </StrictMode>,
)
