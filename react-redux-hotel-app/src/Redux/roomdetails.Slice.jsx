import { createSlice } from "@reduxjs/toolkit";

const roomsDetailsSlice = createSlice({
   name:"roomdetails",
   initialState: {
    selectedRoom:null,
    isOpen: false,
    },
    reducers:{
        openRoomDetails(state,action){
            state.selectedRoom = action.payload;
            state.isOpen = true;
        },
        closeRoomDetails(state){
            state.selectedRoom = null;
            state.isOpen = false
        },
    },
  
},)

export const {openRoomDetails, closeRoomDetails} = roomsDetailsSlice.actions;
export default roomsDetailsSlice.reducer