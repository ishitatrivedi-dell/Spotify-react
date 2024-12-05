import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Upperbody from './components/jsx/Upperbody.jsx'
import Footer from './components/jsx/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Upperbody/>
    <Footer/>
  </StrictMode>,
)
