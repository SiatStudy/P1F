import React, { useState } from 'react';
import style from "./MyPage.module.css";
import Header from '../container/Header';
import SideMenu from '../container/SideMenu';
import UserInfo from '../container/UserInfo';
import MyPageContainer from '../content/MyPageContainer';

function MyPage() {
  const [titleh, setTitleh] = useState("그래프로 한 눈에 보기");

  return (
    <div className={style.Dday}>
      <div className={style.Side}>
      <SideMenu titleh={titleh} setTitleh={setTitleh}></SideMenu>
        <UserInfo></UserInfo>
      </div>
      <div className={style.Main}>
      <Header $titleh={titleh} />
        <MyPageContainer></MyPageContainer>
      </div>
    </div>
  );
}

export default MyPage;