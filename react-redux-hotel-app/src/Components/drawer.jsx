import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeDrawer } from '../Redux/drawerSlice';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaClipboardList, FaHeart, FaEnvelope, FaStar, FaSignOutAlt } from 'react-icons/fa'; // Icons from react-icons
import { openProfilePopup } from '../Redux/profilePopup';
import { openBookingsPopup } from '../Redux/bookingPopup';
import { openFavouritesPopup } from '../Redux/favouritePopup';
import { openMessagesPopup } from '../Redux/messagePopup';
import { openReviewsPopup } from '../Redux/reviewPopup';
import ProfilePopup from './profilePopup';


const DrawerComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const navigate = useNavigate();

  // Handle State of Popup
  const handleOpenPopup = () =>{
    dispatch (openProfilePopup());
    dispatch (closeDrawer())
  }
  // Handle State of bookings popup
  const handleOpenbookings = ()=>{
     dispatch (openBookingsPopup());
     dispatch (closeDrawer())
  }
  
  // Handle State of favourite bookings
  const handleOpenFavourites = ()=>{
    dispatch (openFavouritesPopup());
    dispatch (closeDrawer())
  }
  // Handle State of Message Popup
  const handleOpenMessages = ()=>{
    dispatch (openMessagesPopup());
    dispatch (closeDrawer())
  }
  // Handle State of Reviews
  const handleOpenReviews = ()=>{
    dispatch (openReviewsPopup());
    dispatch (closeDrawer())
  }
 
  // Handle Routing
    const handleNavigate = (route) => {
    navigate(route);
    dispatch(closeDrawer()); 
  };

  return (
    <>
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={() => dispatch(closeDrawer())}
      PaperProps={{
        sx: {
          width: '300px', // Adjust the width
          backgroundColor: '#f5f5f5', // Light gray background
          padding: '20px', // Padding inside the drawer
        },
      }}
    >
      <Box sx={{ paddingBottom: '20px', textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
          Menu
        </Typography>
      </Box>
      <List>
        <ListItem button onClick={handleOpenPopup}>
          <ListItemIcon>
            <FaUserCircle size={24} style={{ color: '#007BFF' }} />
          </ListItemIcon>
          <ListItemText primary="Profile" sx={{ color: '#333' }} />
        </ListItem>

        <ListItem button onClick={handleOpenbookings}>
          <ListItemIcon>
            <FaClipboardList size={24} style={{ color: '#28a745' }} />
          </ListItemIcon>
          <ListItemText primary="Bookings" sx={{ color: '#333' }} />
        </ListItem>

        <ListItem button onClick = {handleOpenFavourites}>
          <ListItemIcon>
            <FaHeart size={24} style={{ color: '#FF6347' }} />
          </ListItemIcon>
          <ListItemText primary="Favourites" sx={{ color: '#333' }} />
        </ListItem>

        <ListItem button onClick={handleOpenMessages}>
          <ListItemIcon>
            <FaEnvelope size={24} style={{ color: '#1E90FF' }} />
          </ListItemIcon>
          <ListItemText primary="Messages" sx={{ color: '#333' }} />
        </ListItem>

        <ListItem button onClick = {handleOpenReviews} >
          <ListItemIcon>
            <FaStar size={24} style={{ color: '#FFD700' }} />
          </ListItemIcon>
          <ListItemText primary="Reviews" sx={{ color: '#333' }} />
        </ListItem>

        <ListItem
          button
          onClick={() => handleNavigate('/')}
          sx={{
            backgroundColor: '#FF6347', // Red background for logout
            '&:hover': {
              backgroundColor: '#FF4500', // Darker red on hover
            },
            color: '#fff', // White text color for logout
            borderRadius: '5px', // Rounded corners for logout button
            marginTop: '20px',
          }}
        >
          <ListItemIcon>
            <FaSignOutAlt size={24} style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
    {/* <ProfilePopup/> */}
    </>
  );
};

export default DrawerComponent;

