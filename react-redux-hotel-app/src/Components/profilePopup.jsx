import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/profilePopup.css"
import { closeProfilePopup } from '../Redux/profilePopup';

const ProfilePopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.profile.isOpen)

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
      <h2>Profile Popup</h2>
      <p>This is your profile information.</p>
      <button onClick={() => dispatch(closeProfilePopup('profile'))}>Close</button>
      </div>
 
    </div>
  );
};

export default ProfilePopup;