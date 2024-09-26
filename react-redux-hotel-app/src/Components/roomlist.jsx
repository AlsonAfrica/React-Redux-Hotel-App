import React, { useState } from 'react'; // Removed the duplicate import
import "../Styles/roomcards.css"; 
import { openRoomDetails } from '../Redux/roomdetails.Slice';
import { useDispatch } from 'react-redux';
import { FaHeart, FaShareAlt } from 'react-icons/fa'; 

const RoomCard = ({ roomData }) => {
  const dispatch = useDispatch();
  const { imageUrl, amenities, starRating, roomType, availability, maxOccupancy, price } = roomData;

  // State for like button
  const [liked, setLiked] = useState(false);

  // Function to handle button click
  const handleViewClick = () => {
    dispatch(openRoomDetails(roomData));
  };

  // Function to handle like button click
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  // Function to handle share button click (Placeholder)
  const handleShareClick = () => {
    alert('Room shared!');
  };

  return (
    <div className="room-card">
      {/* Room Image */}
      <div className="room-image">
        <img src={imageUrl} alt={`Room: ${roomType}`} />
      </div>

      {/* Room Details */}
      <div className="room-details">
        {/* Room Type, Star Rating, and Price */}
        <div className="room-header">
          <h3>{roomType}</h3>
          <div className="star-rating">
            {Array(starRating).fill('⭐').join('')}
          </div>
          <div className='room-price'>
            <p>R{price} / night</p>
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

        {/* Like and Share Buttons */}
        <div className='action-buttons'>
          <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
            <FaHeart /> {liked ? 'Liked' : 'Like'}
          </button>
          <button className='share-button' onClick={handleShareClick}>
            <FaShareAlt /> Share
          </button>
        </div>

        {/* View Button */}
        <button className="view-button" onClick={handleViewClick}>
          View
        </button>

        {/* Like and Share Buttons */}
     
      </div>
    </div>
  );
};

export default RoomCard;
