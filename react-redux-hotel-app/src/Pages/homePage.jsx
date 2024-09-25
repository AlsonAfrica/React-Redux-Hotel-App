import "../Styles/homePage.css"
import "../Styles/landingPage.css"
import Navbar from "../Components/navBar";
import RoomList from "../Components/rooms";

const HomePage = () => {
    return (
    <div className="home-wrapper">
        <div className="banner">
           <Navbar/> 
          <div className="text">
            <h1>WELCOME TO KING ALSON'S FORTUNE HOTEL <br/> WERE YOU JUST DO NOT STAY BUT BELONG! </h1>
            <h1>HI WELCOME BACK!</h1>
          </div>  
        </div>
        <div className="view-rooms">
          <h1>View Our Rooms</h1>
        </div>
        <div className="room-lists">
       <RoomList/>
        </div>
    </div>);
}
 
export default HomePage;