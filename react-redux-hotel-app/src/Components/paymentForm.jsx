import React from 'react';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51Pwumx07fzn9gsZcHOkGrOiFXrw1LWj5rxbnavl9oO0gPP0Kau3MJp7f2UdqQKY15UCnZE3LgPoWfsUgYD3kZR9500pQH2tJdo');

const PaymentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log("Payment submitted");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh" // full viewport height
    >
      <Paper elevation={3} sx={{ padding: '20px', maxWidth: '400px', width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Payment Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Cardholder Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '20px' }}
            required
          />
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '20px' }}
            required
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Expiration Date"
                placeholder="MM/YY"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: '20px' }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                type="password"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: '20px' }}
                required
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: '20px', width: '100%' }}
          >
            Pay Now
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default PaymentForm;


