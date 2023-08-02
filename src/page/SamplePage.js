import React from 'react';
import style from "./SamplePage.module.css";
import Header from '../container/Header';
import SideMenu from '../container/SideMenu';
import UserInfo from '../container/UserInfo';
import ProgressBar from '../container/ProgressBar';
import DdayTable from '../container/DdayTable';

function SamplePage() {
  return (
    <div className={style.SamplePage}>
      <div className={style.Side}>
        <SideMenu></SideMenu>
        <UserInfo></UserInfo>
      </div>
      <div className={style.Main}>
        <Header>목표 달성 D-day</Header>
        <ProgressBar></ProgressBar>
        <DdayTable></DdayTable>
      </div>
    </div>
  );
}

export default SamplePage;