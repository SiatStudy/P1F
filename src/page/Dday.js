import React from 'react';
import style from "./Dday.module.css";
import Nav from '../container/Nav';
import Header from '../container/Header';
import Section from '../container/Section';

function Dday() {
  return (
    <div className={style.Dday}>
      <div className={style.Side}>
        <Nav></Nav>
      </div>
      <div className={style.Main}>
        <Header>목표 달성 D-day</Header>
        <Section></Section>
      </div>
    </div>
  );
}

export default Dday;