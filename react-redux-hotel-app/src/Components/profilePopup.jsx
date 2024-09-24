import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/profilePopup.css"
import { closeProfilePopup } from '../Redux/profilePopup';
import { clearUserInfo } from '../Redux/user.Slice';

// Handles the state of the popup from Redux Slice
const ProfilePopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.profile.isOpen)
  const userInfo = useSelector((state) => state.user.userInfo);
  if (!isOpen) return null;


  return (
    <div className="popup-overlay">
    <div className="popup">
      <h2>Profile Popup</h2>
      {userInfo ? (
        <div>
          <p>Email: {userInfo.email}</p>
          <p>User ID: {userInfo.uid}</p>
          <p>Name:</p>
          <p>Cell Phone:</p>
          <p>Address</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
      <button onClick={() => {
        dispatch(closeProfilePopup('profile'));
      }}>
        Close
      </button>
    </div>
  </div>
  );
};

export default ProfilePopup;