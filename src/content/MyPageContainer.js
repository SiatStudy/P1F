import React from 'react';
import style from './MyPageContainer.module.css';
import CustomMyPageDiv from '../component/CustomMyPageDiv';

const MypageContainer = () => {
  return (
    <div className={style.container}>
      <CustomMyPageDiv></CustomMyPageDiv>
    </div>
  );
};

export default MypageContainer;