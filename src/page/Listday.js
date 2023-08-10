import React, { useState, useEffect } from "react";
import style from "./Listday.module.css";
import Header from "../container/Header";
import SideMenu from "../container/SideMenu";
import UserInfo from "../container/UserInfo";
import { Calendar } from "../content/Calendar";
import { getUserData } from "../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, setUserNickName } from "../store/userData";
import { setTodoData } from "../store/todoData";
import { dummyData3 } from "../apis/dummyData3";

function Listday() {
  const [titleh, setTitleh] = useState("List Day");
  // //리덕스 연결
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const todoData = useSelector((state) => state.todoData);
  // const [titleh, setTitleh] = useState("List Day");

  // //처음 페이지 랜딩 시 백엔드에 요청해서 리덕스에 닉네임, 이메일 저장
  // useEffect(() => {
  //   let obj = getUserData(`/api/users/setting`);
  //   dispatch(setUserEmail(obj.email));
  //   dispatch(setUserNickName(obj.nickName));
  // }, []);

  // 리덕스 나오는지 확인 코드
  dispatch(setUserNickName("사용자1"));
  let nickName = userData.userNickName;
  console.log("nickName리덕스: "+nickName);
  dispatch(setUserEmail("example1234@gmail.com"));
  console.log("email리덕스: "+userData.userEmail);

  // todoData가 정상동작하는지는 추가 확인이 필요
  // dispatch(setTodoData(dummyData3()));
  // console.log("todoList리덕스: ");
  // console.log(todoData);
  

  return (
    <div className={style.Listday}>
      <div className={style.Side}>
        <SideMenu titleh={titleh} setTitleh={setTitleh}></SideMenu>
        <UserInfo />
      </div>
      <div className={style.Main}>
        <Header $titleh={titleh} />
        <div className={style.List}>
          <Calendar mode={"list"} />
        </div>
      </div>
    </div>
  );
}

export default Listday;
