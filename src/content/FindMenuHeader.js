import React from 'react';
import style from './FindMenuHeader.module.css';
import MenuItem from '../component/MenuItem';

const FindMenuHeader = ({ color1, color2 }) => {
  return (
    <div className={style.container}>
      <MenuItem color={color1}>ID 찾기</MenuItem>
      <MenuItem color={color2}>비밀번호 찾기</MenuItem>
    </div>
  );
};

export default FindMenuHeader;