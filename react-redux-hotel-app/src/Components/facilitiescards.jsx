import React, { useRef } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Box, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

function CardFacilities() {
  const cardsData = [
    {
      title: 'Gym',
      description: 'A beautiful view of the ocean.',
      image: 'https://source.unsplash.com/random/300x200?ocean',

    },
    {
      title: 'Parking',
      description: 'A peaceful stay in the mountains.',
      image: 'https://source.unsplash.com/random/300x200?mountains',
    },
    {
      title: 'Swimming',
      description: 'Experience the bustling city life.',
      image: 'https://source.unsplash.com/random/300x200?city',
    },
    {
      title: 'Spar',
      description: 'A cozy cottage in the countryside.',
      image: 'https://source.unsplash.com/random/300x200?cottage',
    },
    {
      title: 'Activities',
      description: 'A luxurious stay with premium amenities.',
      image: 'https://source.unsplash.com/random/300x200?villa',
    },
    {
      title: 'Pools',
      description: 'A luxurious stay with premium amenities.',
      image: 'https://source.unsplash.com/random/300x200?villa',
    },
    {
      title: 'Kiddies Room',
      description: 'A luxurious stay with premium amenities.',
      image: 'https://source.unsplash.com/random/300x200?villa',
      
     
    }
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Navigation buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',
          padding: '0 20px',
          zIndex: 1,
        }}
      >
        <IconButton
          onClick={scrollLeft}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <BiSolidLeftArrow size={24} />
        </IconButton>
        <IconButton
          onClick={scrollRight}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <BiSolidRightArrow size={24} />
        </IconButton>
      </Box>

      {/* Card container */}
      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto', // Allow horizontal scrolling
          width: '100%',    // Full width of the container
          padding: '20px',
          gap: '16px',      // Space between cards
          scrollBehavior: 'smooth', // Smooth scrolling
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        {cardsData.map((card, index) => (
          <Card sx={{ minWidth: 300, maxWidth: 345 }} key={index}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                {card.description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', textAlign:"center" }}>
                <Typography variant="h6" component="div">
                  {card.price}
                </Typography>         
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CardFacilities;
