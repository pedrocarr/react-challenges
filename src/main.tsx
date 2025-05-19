import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import PublicHolidays from './components/PublicHolidays'
import Top10Articles from './components/Top10Articles'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Top10Articles></Top10Articles>
  </StrictMode>,
)
