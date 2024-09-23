import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    isOpen: false,
    list: []
  },
  reducers: {
    openMessagesPopup: (state) => {
      state.isOpen = true;
    },
    closeMessagesPopup: (state) => {
      state.isOpen = false;
    },
    setMessages: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { openMessagesPopup, closeMessagesPopup, setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;