import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isOpen: false,
    data: null
  },
  reducers: {
    openProfilePopup: (state) => {
      state.isOpen = true;
    },
    closeProfilePopup: (state) => {
      state.isOpen = false;
    },
    setProfileData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { openProfilePopup, closeProfilePopup, setProfileData } = profileSlice.actions;
export default profileSlice.reducer;