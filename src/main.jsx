import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import { ToDoProvider } from './context/ToDoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>,
)
