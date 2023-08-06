import React from 'react';
import style from "./MyPage.module.css";
import Header from '../container/Header';
import SideMenu from '../container/SideMenu';
import UserInfo from '../container/UserInfo';
import ProgressBar from '../container/ProgressBar';
import DdayTable from '../container/DdayTable';
import MyPageContainer from '../content/MyPageContainer';

function MyPage() {
  return (
    <div className={style.Dday}>
      <div className={style.Side}>
        <SideMenu></SideMenu>
        <UserInfo></UserInfo>
      </div>
      <div className={style.Main}>
        <Header title = "그래프로 한 눈에 보기"></Header>
        <MyPageContainer></MyPageContainer>
      </div>
    </div>
  );
}

export default MyPage;