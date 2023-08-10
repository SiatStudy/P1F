import React, { useState } from 'react';
import style from "./Page.module.css";
import Header from '../container/Header';
import SideMenu from '../container/SideMenu';
import UserInfo from '../container/UserInfo';
import MyPageContainer from '../content/MyPageContainer';

function MyPage() {
  const [titleh, setTitleh] = useState("마이페이지");

  return (
    <div className={style.Page}>
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