import React from 'react';
import "../Styles/roomcards.css"; // Ensure you have a CSS file for styling
import { openRoomDetails } from '../Redux/roomdetails.Slice';
import { useDispatch } from 'react-redux';

const RoomCard = ({ roomData }) => {
  const dispatch = useDispatch();
  const { imageUrl, amenities, starRating, roomType, availability, maxOccupancy } = roomData;

  // Function to handle button click
  const handleViewClick = () => {
    dispatch(openRoomDetails(roomData))
  };

  return (
    <div className="room-card">
      {/* Room Image */}
      <div className="room-image">
        <img src={imageUrl} alt={`Room: ${roomType}`} />
      </div>

      {/* Room Details */}
      <div className="room-details">
        {/* Room Type and Star Rating */}
        <div className="room-header">
          <h3>{roomType}</h3>
          <div className="star-rating">
            {Array(starRating).fill('⭐')}
          </div>
        </div>

        {/* Room Amenities */}
        <div className="room-amenities">
          <h4>Amenities:</h4>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Room Availability */}
        <div className="room-availability">
          <h4>Availability:</h4>
          <p>{availability ? 'Available' : 'Not Available'}</p>
        </div>

        {/* Maximum Occupancy */}
        <div className="room-occupancy">
          <h4>Max Occupancy:</h4>
          <p>Accommodates up to {maxOccupancy} {maxOccupancy > 1 ? 'people' : 'person'}</p>
        </div>

        {/* View Button */}
        <button className="view-button" onClick={handleViewClick}>
          View
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
