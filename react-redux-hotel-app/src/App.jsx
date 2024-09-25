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
import HomePage from './Pages/homePage'
import { useSelector } from 'react-redux'
import ProfilePopup from './Components/profilePopup'
import BookingsPopup from './Components/bookingsPopup'
import FavouritesPopup from './Components/favouritesPopup'
import MessagesPopup from './Components/messagesPopup'
import ReviewPopup from './Redux/reviewPopup'
import ReviewsPopup from './Components/reviewsPopup'
import RoomDetailsPopup from './Components/roomDetailsPopup'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Policies" element={<Policies/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/authetication" element={<Authentication/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
      </Routes>
    </Router>
    <ProfilePopup/>
    <BookingsPopup/>
    <FavouritesPopup/>
    <MessagesPopup/>
    <ReviewsPopup/>
    <RoomDetailsPopup/>
    
    </>
  )
}

export default App
