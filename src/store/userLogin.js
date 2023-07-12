import { createSlice } from "@reduxjs/toolkit";

let userLogin = createSlice({
    name : "userLogin",
    initialState : {
        sectionID : "",
        userLogin : false
    },
    reducers : {
        userLoginEvent : (state, action) => {
            state.sectionID = action.payload;
            state.userLogin = true;
        },
        userLogoutEvent : (state, action) => {
            state.sectionID = "";
            state.userLogin = false;
        }
    }
});

export const { userLoginEvent, userLogoutEvent } = userLogin.actions;
export default userLogin.reducer;