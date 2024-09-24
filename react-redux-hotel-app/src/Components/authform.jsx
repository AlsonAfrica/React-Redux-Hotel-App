// components/LoginForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../Redux/autheticationSlice';// Adjust the path as necessary
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { setUserInfo } from '../Redux/user.Slice';


const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const { loading, error, user } = useSelector((state) => state.auth); // Adjust based on your Redux setup

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (!termsAccepted) {
        alert('You must accept the terms and conditions!');
        return;
      }
      // Dispatch registerUser action
      dispatch(registerUser({ email, password })).then((action) => {
        if (registerUser.fulfilled.match(action)) {
          // Switch to login view after successful registration
          const user = action.payload;
          dispatch(setUserInfo({email:user.email, uid:user.uid}))
          
          setIsSignUp(false);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setTermsAccepted(false);
        }
      });
    } else {
      // Dispatch loginUser action
      dispatch(loginUser({ email, password })).then((action) => {
        if (loginUser.fulfilled.match(action)) {
          // Redirect to /HomePage on successful login
          const user = action.payload;
          dispatch(setUserInfo({email: user.email, uid:user.uid}))
          navigate('/HomePage');
        }
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        {isSignUp ? 'Sign Up' : 'Login'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {isSignUp && (
          <TextField
            fullWidth
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
        {isSignUp && (
          <Button>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
            }
            label="I accept the Terms and Conditions"
          />
          </Button>
        )}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading || (isSignUp && !termsAccepted)}
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </Button>
      </form>
      {error && <Typography color="error">{error}</Typography>}
      {user && <Typography color="success">Registered as {user.email}</Typography>}

      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        sx={{ marginTop: '10px' }}
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </Button>
    </Box>
  );
};

export default LoginForm;
