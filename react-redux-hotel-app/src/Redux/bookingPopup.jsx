import { createSlice } from '@reduxjs/toolkit';

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    isOpen: false,
    list: []
  },
  reducers: {
    openBookingsPopup: (state) => {
      state.isOpen = true;
    },
    closeBookingsPopup: (state) => {
      state.isOpen = false;
    },
    setBookings: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { openBookingsPopup, closeBookingsPopup, setBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;