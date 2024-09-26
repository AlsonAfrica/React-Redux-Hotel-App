import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeRoomDetails } from '../Redux/roomdetails.Slice';
import "../Styles/roomPopup.css"
import { useNavigate } from 'react-router-dom';

const RoomDetailsPopup = () => {
  const dispatch = useDispatch();
  const { selectedRoom, isOpen } = useSelector((state) => state.roomdetails);
  const navigate = useNavigate();
  const Handlepayment = () =>{
    navigate("/Payment")
    dispatch(closeRoomDetails());
  }
  // const {price} = selectedRoom;

  if (!isOpen || !selectedRoom) return null;

  return (
    <div className="popup-overlay-rooms">
      <div className="popup-rooms">
        <div className='room-content'>
          <div className="image-grid-popup">
              <h2>{selectedRoom.roomType}</h2> 
              <div className="additional-images-grid">
                {selectedRoom.additionalImages.map((image, index) => (
                  <img key={index} src={image} alt={`Additional View ${index + 1}`} className="additional-image" />
                ))}
              </div>
          </div>
          
          {/* <img src={selectedRoom.imageUrl} alt={`Room: ${selectedRoom.roomType}`} /> */}
          <div className='room-details'> 
                <div className="room-container">
                    <div className="amenities">
                        <h4>Amenities:</h4>
                        <ul>
                            {selectedRoom.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                        <p>Star Rating: {Array(selectedRoom.starRating).fill('⭐')}</p>
                        <p>Availability: {selectedRoom.availability ? 'Available' : 'Not Available'}</p>
                        <p>Max Occupancy: {selectedRoom.maxOccupancy} {selectedRoom.maxOccupancy > 1 ? 'people' : 'person'}</p>
                        <button onClick={() => dispatch(closeRoomDetails())}>Close</button>
                    </div>
                    <div className='payment-policies'>

                    </div>
                    <div className="payment">
                      <h1>Reserve Your Room</h1>
                      <div className="date"> 
                        <p>Check-in</p>
                        <input type='date'></input> 
                        <p>Check-out</p>
                        <input type="date"></input> 
                        <form>
                              <label for="cars">Personale</label>
                              <select name="cars" id="cars">
                                <option value="1"></option>
                                <option value="2">1</option>
                                <option value="3">2</option>
                                <option value="4">3</option>
                                <option value="5">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                        </form>
                      </div>
                      <div className="reservation-details">
                        <div className="radio-buttons">
                          <h4>Additional Information</h4>
                          <form>
                            <p>Booking Reasons:(Optional)</p>
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label htmlFor="html">Get Away</label><br />
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label htmlFor="css">Work</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                            <label htmlFor="javascript">Group Outing</label>
                          </form>
                        </div>
                        <div className="reservation-infor"></div>
                      </div>
                     
                      <div><button onClick={Handlepayment}>RESERVE YOUR ROOM </button></div>
                     
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPopup;
