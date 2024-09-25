import React from 'react';
import RoomCard from './roomlist';
import room from "../assets/room.jpg"; // Ensure you have your image available
import "../Styles/roomcards.css"

const RoomList = () => {
  // Array of room data
  const rooms = [
    {
      imageUrl:room,
      additionalImages: [
         room,
         room,
         room
      ],
      imageUrl: room,
      amenities: ['Wi-Fi', 'Air Conditioning', 'Flat Screen TV', 'Private Bathroom'],
      starRating: 4,
      roomType: 'Deluxe Suite',
      availability: true,
      maxOccupancy: 4,
    },
    {
      imageUrl: room,
      amenities: ['Wi-Fi', 'Air Conditioning', 'Flat Screen TV', 'Private Bathroom'],
      starRating: 5,
      roomType: 'Executive Room',
      availability: false,
      maxOccupancy: 2,
    },
    {
      imageUrl: room,
      amenities: ['Wi-Fi', 'Mini Bar', 'Room Service'],
      starRating: 3,
      roomType: 'Standard Room',
      availability: true,
      maxOccupancy: 3,
    },
    {
        imageUrl: room,
        amenities: ['Wi-Fi', 'Mini Bar', 'Room Service'],
        starRating: 3,
        roomType: 'Standard Room',
        availability: true,
        maxOccupancy: 3,
      },
      {
      imageUrl: room,
      amenities: ['Wi-Fi', 'Mini Bar', 'Room Service'],
      starRating: 3,
      roomType: 'Standard Room',
      availability: true,
      maxOccupancy: 3,
    },
    // Add more rooms as needed
  ];

  return (
    <div className="room-list">
      {rooms.map((roomData, index) => (
        <RoomCard key={index} roomData={roomData} />
      ))}
    </div>
  );
};

export default RoomList;
