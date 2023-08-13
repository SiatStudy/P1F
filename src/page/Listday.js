import React, { useState, useEffect } from "react";
import style from "./Page.module.css";
import Header from '../content/Header';
import SideMenu from '../content/SideMenu';
import UserInfo from '../content/UserInfo';
import { Calendar } from "../content/Calendar";
import { connectTodoData, getUserData } from "../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, setUserNickName } from "../store/userData";
import { addTodoData, delTodoData, modifyTodoData, setTodoData } from "../store/todoData";
import dummyData3 from "../apis/dummyData3";

function Listday() {
  const [titleh, setTitleh] = useState("List Day");
  // //리덕스 연결
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const todoData = useSelector((state) => state.todoData);

  useEffect(() => {
    testingRedux();
  }, []);

  const testingRedux = () => {
    // 리덕스에 임시값 세팅
    dispatch(setUserNickName("사용자1"));
    let nickName = userData.userNickName;
    dispatch(setUserEmail("example1234@gmail.com"));
    dispatch(setTodoData(dummyData3())); 
  }
  // todo 추가, 수정, 삭제 임시 이벤트
  const addEvent = () => {
    let obj1 = {
      tdid: "td4",
      month: 4,
      startDate: 4,
      endDate: 4,
      finishDate: 4,
      tdTitle: "title4",
      tdContent: "content4"
    }
    dispatch(addTodoData(obj1));
  }
  const modifyEvent = () =>{
    dispatch(modifyTodoData({ tdid: "td2", key: "tdContent", value: "new1" }));
  }
  const delEvent = () =>{
    dispatch(delTodoData("td1"));
  }

  // 백엔드에서 데이터 받아오기
  const connectBack = () => {
    const date = new Date();
    const year = date.getFullYear()
    let obj = getUserData(`/api/users/setting`);
    dispatch(setUserEmail(obj.email));
    dispatch(setUserNickName(obj.nickName));
    let arr = connectTodoData(`/api/todos/${year}`);
    // 받아온 배열을 알맞은 형태로 교체
    const transformeArr = arr.map(item => {
      return {
        tdid: item.tdid,
        month: new Date(item.startDate).getMonth() + 1,
        startDate: new Date(item.startDate),
        endDate: new Date(item.tdEndDate),
        finishDate: "",
        tdTitle: item.tdTitle,
        tdContent: item.tdContent
      };
    });
    dispatch(setTodoData(transformeArr));
  }
  
  return (
    <div className={style.Page}>
      <div className={style.Side}>
        <SideMenu titleh={titleh} setTitleh={setTitleh}></SideMenu>
        <UserInfo />
      </div>
      <div className={style.Main}>
        <Header $titleh={titleh} />
        <div className={style.List}>
          <Calendar mode={"list"} />
          {/* 아래 코드는 리덕스를 화면에 찍는 테스트용 코드이므로 실 사용시 삭제해야됨 */}
          <button onClick={connectBack}>백 데이터 받기 임시 버튼</button>
          <button onClick={addEvent}>todo 추가 임시 버튼</button>
          <button onClick={modifyEvent}>todo 수정 임시 버튼</button>
          <button onClick={delEvent}>todo 삭제 임시 버튼</button>
          <div><h2>userData</h2>
            <pre>{JSON.stringify(userData, null, 2)}</pre></div>
          <div><h2>todoData</h2>
            <pre>{JSON.stringify(todoData, null, 2)}</pre></div>
        </div>
      </div>
    </div>
  );
}

export default Listday;
