import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FilterProvider } from './provider/FilterProvider.tsx'
import { ThemeProvider } from './provider/ThemeProvider.tsx'
import { TodoProvider } from './provider/TodoProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  </StrictMode>,
)
