import React, { useState, useEffect } from "react";
import style from "./MainPage.module.css";
import Header from '../content/Header';
import SideMenu from '../content/SideMenu';
import UserInfo from '../content/UserInfo';
import { connectTodoData, getUserData } from "../apis/apis";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail, setUserNickName } from "../store/userData";
import ListdayContainer from "../content/ListdayContainer";
import { setTodoData } from "../store/todoData";

function Listday() {
  const [titleh, setTitleh] = useState("List Day");
  // //리덕스 연결
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const todoData = useSelector((state) => state.todoData);

  useEffect(() => {
    connectBack();
  }, []);

  // 백엔드에서 데이터 받아오기
  const connectBack = () => {
    const date = new Date();
    const year = date.getFullYear()
    let obj = getUserData(`/api/users/setting`);
    dispatch(setUserEmail(obj.email));
    dispatch(setUserNickName(obj.nickName));
    let arr = connectTodoData(`/api/todos/${year}`, "get");
    // 받아온 배열을 알맞은 형태로 교체
    const transformeArr = arr.map(item => {
      return {
        tdid: item.tdid,
        month: new Date(item.startDate).getMonth() + 1,
        startDate: new Date(item.startDate),
        endDate: new Date(item.tdEndDate),
        finishDate: "",
        tdTitle: item.tdTitle,
        tdContent: item.tdContent,
        status: item.status
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
      <div className={style.MainA}>
        <Header $titleh={titleh} />
          <ListdayContainer></ListdayContainer>
        </div>
    </div>
  );
}

export default Listday;
