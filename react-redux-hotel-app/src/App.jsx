import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/landingPage'
import Panel from './Components/Panel'
import Policies from './Pages/Policies'
import Gallery from './Pages/gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Authentication from './Pages/authenticationPage'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Policies" element={<Policies/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/authetication" element={<Authentication/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
