import {configureStore} from "@reduxjs/toolkit";
import drawerSlice from "./drawerSlice";
import profilePopup from "./profilePopup";
import favouritePopup from "./favouritePopup";
import messagePopup from "./messagePopup";
import reviewPopup from "./reviewPopup";
import bookingPopup from "./bookingPopup";
import autheticationSlice from "./autheticationSlice";
import userSlice from "./user.Slice";
import roomdetailsSlice from "./roomdetails.Slice";


export const store = configureStore({
    reducer:{
        drawer:drawerSlice,
        profile:profilePopup,
        favorites: favouritePopup,
        messages: messagePopup,
        reviews: reviewPopup,
        bookings: bookingPopup,
        auth: autheticationSlice,
        user:userSlice,
        roomdetails: roomdetailsSlice
    },
})

export default store;