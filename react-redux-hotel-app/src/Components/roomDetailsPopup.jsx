import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeRoomDetails } from '../Redux/roomdetails.Slice';
import "../Styles/profilePopup.css";

const RoomDetailsPopup = () => {
  const dispatch = useDispatch();
  const { selectedRoom, isOpen } = useSelector((state) => state.roomdetails);

  if (!isOpen || !selectedRoom) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className='room-content'>
          <h2>{selectedRoom.roomType}</h2>
          {/* Additional Images Grid at the top */}
          <div className="additional-images-grid">
            {selectedRoom.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`Additional View ${index + 1}`} className="additional-image" />
            ))}
          </div>

          
          {/* <img src={selectedRoom.imageUrl} alt={`Room: ${selectedRoom.roomType}`} /> */}
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
      </div>
    </div>
  );
};

export default RoomDetailsPopup;
