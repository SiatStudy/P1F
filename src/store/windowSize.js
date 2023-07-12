import { createSlice } from "@reduxjs/toolkit";

let windowSize = createSlice({
    name : "windowSize",
    initialState : {
        width : window.innerWidth,
        height : window.innerHeight
    },
    reducers : {
        handleResize : (state, action) => {
            state.width = window.innerWidth;
            state.height = window.innerHeight;
        }
    }
});

export const { handleResize } = windowSize.actions;
export default windowSize.reducer;