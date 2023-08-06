import React, { useState } from 'react';
import style from "./Listday.module.css";
import Header from '../container/Header';
import SideMenu from '../container/SideMenu';
import UserInfo from '../container/UserInfo';
import { Calendar } from '../content/Calendar';

function Listday() {

  const [titleh, setTitleh] = useState("");

  return (
    <div className={style.Listday}>
      <div className={style.Side}>
        <SideMenu titleh={titleh} setTitleh={setTitleh} />
        <UserInfo />
      </div>
      <div className={style.Main}>
        <Header $titleh={titleh} />
        <div className={style.Calendar}>
          <Calendar mode={"calendar"} />
        </div>
      </div>
    </div>
  );
}

export default Listday;