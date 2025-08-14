import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonList from './PokemonList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonList />
  </StrictMode>,
)
