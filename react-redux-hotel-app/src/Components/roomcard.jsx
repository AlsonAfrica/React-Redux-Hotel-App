import React, { useRef } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Box, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

function CardCollection() {
  const cardsData = [
    {
      title: 'Luxury Bed-Room',
      description: 'A beautiful view of the ocean.',
      image: 'https://source.unsplash.com/random/300x200?ocean',
      price: 'R1120,00/night',
      rating: 1.5,
    },
    {
      title: 'Mountain Retreat',
      description: 'A peaceful stay in the mountains.',
      image: 'https://source.unsplash.com/random/300x200?mountains',
      price: '$150/night',
      rating: 4.8,
    },
    {
      title: 'City Lights Suite',
      description: 'Experience the bustling city life.',
      image: 'https://source.unsplash.com/random/300x200?city',
      price: '$200/night',
      rating: 4.2,
    },
    {
      title: 'Country Cottage',
      description: 'A cozy cottage in the countryside.',
      image: 'https://source.unsplash.com/random/300x200?cottage',
      price: '$95/night',
      rating: 4.7,
    },
    {
      title: 'Luxury Villa',
      description: 'A luxurious stay with premium amenities.',
      image: 'https://source.unsplash.com/random/300x200?villa',
      price: '$350/night',
      rating: 5.0,
    },
    {
      title: 'Luxury Villa',
      description: 'A luxurious stay with premium amenities.',
      image: 'https://source.unsplash.com/random/300x200?villa',
      price: '$350/night',
      rating: 5.0,
    },
    {
      title: 'Luxury Villa',
      description: 'A luxurious stay with premium amenities.',
      image: 'https://source.unsplash.com/random/300x200?villa',
      price: '$350/night',
      rating: 5.0,
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

              {/* Price and Rating */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography variant="h6" component="div">
                  {card.price}
                </Typography>
                <Rating name="read-only" value={card.rating} precision={0.5} readOnly />
              </Box>

              {/* View and Favorite Buttons */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button variant="contained" color="primary">
                  View
                </Button>
                <IconButton aria-label="add to favorites" color="error">
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default CardCollection;
