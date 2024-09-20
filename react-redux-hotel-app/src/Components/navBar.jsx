import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to handle navigation
  const handleNavigate = (route) => {
    if (route) {
      navigate(route);
    }
    handleMenuClose(); // Close the menu after navigation
  };

  // Define your menu items with routes where they should be shown
  const menuItems = [
    { label: 'Rooms', color: '#FF6347', routes: ['/',], route: '/' },
    { label: 'Facilities', color: '#1E90FF', routes: ['/',], route: '/' },
    { label: 'Gallery', color: '#32CD32', routes: ['/', '/Policies', '/Gallery'], route: '/Gallery' },
    { label: 'Home', color: '#FF69B4', routes: ['/Gallery', '/Policies'], route: '/' },
    { label: 'Policies', color: '#FFD700', routes: ['/', '/Gallery', '/Policies'], route: '/Policies' },
    { label: 'Explore Rooms', color: '#FF69B4', routes: ['/', '/Gallery', '/Policies'], route: '/' },
  ];

  // Define pages where the Navbar should NOT be displayed
  const excludedRoutes = ['/login', '/signup'];

  // Conditionally render the Navbar based on the current route
  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }

  // Case-insensitive match for filtering menu items based on the route
  const currentPath = location.pathname.toLowerCase();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems
                .filter(item => item.routes.some(route => currentPath === route.toLowerCase())) // Conditionally render based on route
                .map((item, index) => (
                  <MenuItem key={index} onClick={() => handleNavigate(item.route)}>
                    {item.label}
                  </MenuItem>
                ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: '10px' }}>
            {menuItems
              .filter(item => item.routes.some(route => currentPath === route.toLowerCase())) // Conditionally render based on route
              .map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleNavigate(item.route)}
                  sx={{ color: item.color, border: `1px solid ${item.color}`, '&:hover': { backgroundColor: item.color, color: '#fff' } }}
                >
                  {item.label}
                </Button>
              ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
