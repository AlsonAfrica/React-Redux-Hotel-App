import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/profilePopup.css"
import { closeReviewsPopup } from '../Redux/reviewPopup';

const ReviewsPopup = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.reviews.isOpen)

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
      <h2>Reviews</h2>
      <p>This is your profile information.</p>
      <button onClick={() => dispatch(closeReviewsPopup('profile'))}>Close</button>
      </div>
 
    </div>
  );
};

export default ReviewsPopup;