import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../Styles/profilePopup.css"
import { closeMessagesPopup } from "../Redux/messagePopup";

const MessagesPopup = ()=>{
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.messages.isOpen)

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
        <div className="popup">
        <h2>Messages</h2>
        <p>This is your profile information.</p>
        <button onClick={() => dispatch(closeMessagesPopup('messages'))}>Close</button>
        </div>
   
      </div>
    );
}
export default MessagesPopup