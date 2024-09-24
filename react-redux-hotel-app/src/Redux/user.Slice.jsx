import { createSlice } from "@reduxjs/toolkit";
// Pulls user details from firebase auth
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
        isLoggedIn: false,
    },
    reducers: {
        setUserInfo: (state,action) =>{
            state.userInfo = action.payload;
            state.isLoggedIn = true;
        },
        clearUserInfo: (state) =>{
            state.userInfo = null;
            state.isLoggedIn = false;
        }
    }
})

export const {setUserInfo, clearUserInfo} = userSlice.actions
export default userSlice.reducer;