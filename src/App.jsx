import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative h-full w-full'>
      <Toaster position='top-center'/>
      <Navbar />
      <Hero />
      <Services />
      <Reviews />
      <Footer />
    </div>
    
  )
}

export default App
