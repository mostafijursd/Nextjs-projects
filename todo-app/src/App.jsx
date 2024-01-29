import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Page from './pages/Page'

function App() {


  return (
   <div>
<Header/>
<Home/>
<Page/>
    <Footer/>
   </div>
  )
}

export default App
