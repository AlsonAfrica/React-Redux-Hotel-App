import {configureStore} from "@reduxjs/toolkit";
import drawerSlice from "./drawerSlice";
import profilePopup from "./profilePopup";
import favouritePopup from "./favouritePopup";
import messagePopup from "./messagePopup";
import reviewPopup from "./reviewPopup";
import bookingPopup from "./bookingPopup";


export const store = configureStore({
    reducer:{
        drawer:drawerSlice,
        profile:profilePopup,
        favorites: favouritePopup,
        messages: messagePopup,
        reviews: reviewPopup,
        bookings: bookingPopup
    },
})

export default store;