import CardFacilities from "../Components/facilitiescards";
import Navbar from "../Components/navBar";
import CardCollection from "../Components/roomcard";
import image from "../assets/image.png"
import "../Styles/landingPage.css"
import HeroImage from "../assets/banner.jpg"
import MapComponent from "../Components/map";
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
      <div className="wrapper-landing">
        <div className="banner">
           <Navbar/> 
          <div className="text">
            <h1>WELCOME TO KING ALSON'S FORTUNE HOTEL <br/> WERE YOU JUST DONT'T STAY BUT BELONG! </h1>
            <p>Find your perfect stay with ease explore a wide range of rooms, grab great <br/> deals, and book your ideal gataway today</p>
          </div>  
        </div>
        {/* ---------Hero section end------ */}
        <div className="navbar-landing">
          <input type="text" placeholder="Search ..."></input><button>Search</button>
        </div>
        <div className="room-cards">
         <h1>View Our Rooms</h1>
         <CardCollection/>
        </div>
        <div className="facilities">
         <h1>View Our Facilities</h1>
         <CardFacilities/>
        </div>
        <div className="about">
            <div className="picture">
            </div>
            <div className="text-about">
            <h1>About Us</h1>
                    <p className="hotel-location"> WELCOME: TO KING ALSON'S FORTUNE HOTEL</p>
                    <p className="hotel-about">
                         Nestled in the heart of Soweto, King Alson's Fortune Hotel offers a unique blend of comfort, luxury, and modern amenities, designed to make every stay unforgettable. Whether you're here for business, leisure, or a romantic getaway, our hotel provides the perfect setting for relaxation and exploration.
                         At King Alson's Hotel, we pride ourselves on delivering exceptional service with attention to detail. From our elegantly furnished rooms and suites to our on-site dining options, each element is crafted to create a memorable experience for our guests. Enjoy stunning views of Scenic Attraction's, relax by our rooftop pool, or rejuvenate at our state-of-the-art spa.
                         Conveniently located near Popular Tourist Spots/Business District, our hotel is the perfect base for discovering all that Soweto has to offer. Whether you’re exploring the local culture, indulging in fine dining, or attending meetings, our staff is committed to making your stay comfortable and seamless.
                    </p>
            </div>
        </div>
          <div className="footer">
            <div className="footer-section map">
              <MapComponent />
            </div>

            <div className="footer-section">
              <h1>Our Location</h1>
              <p>1234 Fortune Street, King's Avenue, City, Country</p>
              <p><strong>Open Hours:</strong> Monday - Sunday, 8 AM - 10 PM</p>
            </div>

            <div className="footer-section">
              <h1>Contact Us</h1>
              <p><strong>Phone:</strong> +123-456-7890</p>
              <p><strong>Email:</strong> contact@kingsfortunehotel.com</p>
            </div>

            <div className="footer-section">
              <h1>Follow Us</h1>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h1>Quick Links</h1>
              <ul>
                <li><a href="/rooms">Rooms</a></li>
                <li><a href="/facilities">Facilities</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <button className="back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Back to Top
            </button>
            
          </div>  
      </div>
    );
}
 
export default LandingPage;