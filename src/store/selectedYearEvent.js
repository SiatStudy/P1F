import { createSlice } from "@reduxjs/toolkit";

import { isEventValue } from "../util/validation/isEventValue"
import { isNumber }} from "../util/validation/isNumber"

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
        state : true
    }],

    reducers : {
        setEvent : (state, action) => {
            if(isEventValue(action?.payload) != undefined) state = action.payload;
        },

        addEvent : (state, action) => {
            if(isEventValue(action?.payload) != undefined) state.push(action.payload);
        },

        finishEvent : (state, action) => {
            const { id, end } = action.payload;

            if(isNumber(id)) {
                state = state.map(item => {
                    if(item.id === id) {
                        return {
                            ...item,
                            end : end
                        };
                    } else {
                        return item;
                    }
                });
            }
        },

        removeEvent : (state, action) => {
            const { id } = action.payload;

            if(isNumber(id)) {
                state = state.filter(item => item.id !== id);
            }
        },

        resetEvent : (state, action) => {
            state = [];
        }
    }
});

export const { setEvent, addEvent, finishEvent, removeEvent, resetEvent } = selectedYearEvent.actions;
export default selectedYearEvent.reducer;