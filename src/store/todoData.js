import { createSlice } from "@reduxjs/toolkit";

let todoData = createSlice({
    name : "todoData",
    initialState : [],
    reducers : {
        setTodoData : (state, action) => {
            state = action.payload;
        },
        addTodoData : (state, action) => {
            state.push(action.payload);
        },
        modifyTodoData : (state, action) => {
            state.map((item) =>{
              if(item==item)
            } // 어떤 기준으로 수정하는지
        },
        delTodoData : (state, action) => {
            state.map((item) =>{
              if(item==item)
              state.filter("로직");
            } //어떤 기준으로 삭제하는지
        },
        
        
    }
});

export const { setTodoData } = todoData.actions;
export default todoData.reducer;