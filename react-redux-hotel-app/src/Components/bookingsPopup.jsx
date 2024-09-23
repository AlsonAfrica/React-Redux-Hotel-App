import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/profilePopup.css"
import { closeBookingsPopup } from "../Redux/bookingPopup";

const BookingsPopup = ()=>{
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.bookings.isOpen)

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
        <div className="popup">
        <h2>Bookings</h2>
        <p>This is your profile information.</p>
        <button onClick={() => dispatch( closeBookingsPopup('bookings'))}>Close</button>
        </div>
   
      </div>
    );
}
export default BookingsPopup