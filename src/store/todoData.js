import { createSlice } from "@reduxjs/toolkit";

let todoData = createSlice({
    name : "todoData",
    initialState : [],
    reducers : {
        setTodoData : (state, action) => {
            state = action.payload;
        }, //백엔드에서 todo데이터 객체 배열 생성 함수
        addTodoData : (state, action) => {
            state.push(action.payload);
        }, //할일 추가 시 객체를 받아 배열에 추가하는 함수
        modifyTodoData : (state, action) => {
            state.map((item) =>{
              if(item==item)
            } // 어떤 기준으로 수정하는지
        }, // 할일 수정 시 수정할 tdid, 변경할 키값, 변경할 value 받아서 수정
        delTodoData : (state, action) => {
            state.map((item) =>{
              if(item==item)
              state.filter("로직");
            } //어떤 기준으로 삭제하는지
        } // 할일 삭제 시 삭제할 tdid 받아서 삭제
    } // 이렇게 추가, 수정, 삭제하는 axios api로직도 만들어야됨
});

export const { setTodoData } = todoData.actions;
export default todoData.reducer;