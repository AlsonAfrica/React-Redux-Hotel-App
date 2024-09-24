import React from 'react';

const Room = ({ room }) => {
  if (!room) {
    return <p>No room information available.</p>;
  }

  const { imageUrl, amenities, rating, roomType, availability, accommodates } = room;

  return (
    <div className="room-card">
      <img src={imageUrl} alt={`${roomType} image`} className="room-image" />
      <div className="room-details">
        <h3 className="room-type">{roomType}</h3>
        <div className="rating">
          <span>⭐ {rating}</span>
        </div>
        <div className="amenities">
          <h4>Amenities:</h4>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
        <p className="accommodates">Accommodates: {accommodates} people</p>
        <p className={`availability ${availability ? 'available' : 'unavailable'}`}>
          {availability ? 'Available' : 'Unavailable'}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
