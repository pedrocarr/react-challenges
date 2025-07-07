import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import CustomHooksDemo from './components/CustomHooksDemo'
import PublicHolidays from './components/PublicHolidays'
import Top10Articles from './components/Top10Articles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import PokemonList from './components/PokemonList'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <Top10Articles></Top10Articles>

    </QueryClientProvider>
    {/* <PublicHolidays></PublicHolidays> */}
  </StrictMode>,
)
