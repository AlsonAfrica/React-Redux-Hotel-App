import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landingPage';
import Policies from './Pages/Policies';
import Gallery from './Pages/gallery';
import Authentication from './Pages/authenticationPage';
import HomePage from './Pages/homePage';
import PaymentPage from './Pages/paymentPage';
import RoomDetailsPopup from './Components/roomDetailsPopup';
import ProfilePopup from './Components/profilePopup';
import BookingsPopup from './Components/bookingsPopup';
import FavouritesPopup from './Components/favouritesPopup';
import MessagesPopup from './Components/messagesPopup';
import ReviewsPopup from './Components/reviewsPopup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Payment" element={<PaymentPage />} />
      </Routes>

      {/* Render all popups within the Router context */}
      <ProfilePopup />
      <BookingsPopup />
      <FavouritesPopup />
      <MessagesPopup />
      <ReviewsPopup />
      <RoomDetailsPopup />
    </Router>
  );
}

export default App;

