import { createSlice } from "@reduxjs/toolkit";

let selectedYearEvent = createSlice({
    name : "currentYearEvent",
    initialState : [{
        id : 0,
        eventName : "test",
        eventContent : "This is a test event",
        plan : {
            date : {
                from : "2023-07-23",
                to : "2023-07-24"
            },
            time : {
                from : "03:30",
                to : "10:30"
            },
        },
        end : {
          date : "2023-07-24",
          time : "09:30"
        },
        state : false
    }],
    reducers : {
        setEvent : (state, action) => {
            state = action.payload;
        },
        addEvent : (state, action) => {
            state.push(action.payload);
        },
        finishEvent : (state, action) => {
            const { id, end } = action.payload;
            state[id].state = true;
            state[id].end = end;
        },
        removeEvent : (state, action) => {
            const { id } = action.payload;
            state[id] = action.payload;
        },
        resetEvent : (state, action) => {
            state = [];
        }
    }
});

export const { setEvent, addEvent, finishEvent, removeEvent, resetEvent } = selectedYearEvent.actions;
export default selectedYearEvent.reducer;