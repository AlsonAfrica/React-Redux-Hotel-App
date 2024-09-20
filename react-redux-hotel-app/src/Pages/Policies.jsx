import Navbar from "../Components/navBar";
import image from "../assets/image.png"
import "../Styles/landingPage.css"
import HeroImage from "../assets/banner.jpg"
import MapComponent from "../Components/map";
import { Link } from 'react-router-dom';

const Policies = () => {
    return (
    <div className="policies-wrapper">
        <div className="banner">
           <Navbar/> 
          <div className="text">
            <h1>WELCOME TO KING ALSON'S FORTUNE HOTEL <br/> WERE YOU JUST DO NOT STAY BUT BELONG! </h1>
             <h1>Policies and Contacts</h1>
          </div>  
        </div>
        <div className="policies">
        <div className="hotel-policies">
          <h2>Hotel Policies</h2>
          <ul>
            <li><strong>Check-in:</strong> 3:00 PM</li>
            <li><strong>Check-out:</strong> 11:00 AM</li>
            <li><strong>Cancellation Policy:</strong> Free cancellation up to 48 hours before arrival.</li>
            <li><strong>Pets:</strong> Not allowed, except for service animals.</li>
            <li><strong>Smoking:</strong> Non-smoking property. Smoking is only allowed in designated areas.</li>
            <li><strong>Payment:</strong> We accept Visa, MasterCard, and American Express.</li>
            <li><strong>Extra Beds:</strong> Available upon request with additional charges.</li>
          </ul>
        </div>

        <div className="hotel-contacts">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 1234 Fortune Street, King's Avenue, City, Country</p>
          <p><strong>Phone:</strong> +123-456-7890</p>
          <p><strong>Email:</strong> contact@kingsfortunehotel.com</p>
          <p><strong>Social Media:</strong></p>
          <ul className="social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
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
    </div>  );
}
 
export default Policies;