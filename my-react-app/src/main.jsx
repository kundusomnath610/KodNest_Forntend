import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Button from './Button.jsx'
import About from './About.jsx'
import Home from './home.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button />
    <About/>
    <Home />
    <Contact />
  </StrictMode>,
)
