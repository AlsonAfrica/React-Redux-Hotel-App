import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/profilePopup.css"
import { closeFavouritesPopup } from "../Redux/favouritePopup";

const FavouritesPopup = ()=>{
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.favorites.isOpen)

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
        <div className="popup">
        <h2>Favourites</h2>
        <p>This is your profile information.</p>
        <button onClick={() => dispatch(closeFavouritesPopup('bookings'))}>Close</button>
        </div>
   
      </div>
    );
}
export default FavouritesPopup