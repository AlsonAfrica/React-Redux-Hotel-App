import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    isOpen: false,
    list: []
  },
  reducers: {
    openFavouritesPopup: (state) => {
      state.isOpen = true;
    },
    closeFavouritesPopup: (state) => {
      state.isOpen = false;
    },
    setFavourites: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { openFavouritesPopup, closeFavouritesPopup, setFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;