import React from 'react';
import style from "./SearchPage.module.css";
import Header from '../container/Header';
import SideMenu from '../container/SideMenu';
import UserInfo from '../container/UserInfo';
import SearchPageContainer from '../content/SearchPageContainer';

function Dday() {
  return (
    <div className={style.Dday}>
      <div className={style.Side}>
        <SideMenu></SideMenu>
        <UserInfo></UserInfo>
      </div>
      <div className={style.Main}>
        <Header>List Day</Header>
        <SearchPageContainer></SearchPageContainer>
      </div>
    </div>
  );
}

export default Dday;

