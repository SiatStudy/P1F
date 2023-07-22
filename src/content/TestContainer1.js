import React from 'react';
import style from './TestContainer1.module.css';
import LogoButton from '../component/LogoButton';
import AccessButton from '../component/AccessButton';
import VarInput from '../component/VarInput';
import PasswordInput from '../component/PasswordInput';
import MenuItem from '../component/MenuItem';

//테스트용 컨테이너1
//추후 삭제예정

const onBtnClick=()=>{
  console.log("버튼클릭");
}

const LoginContainer = () => {
  //컴포넌트 테스트용 임시 컨테이너

  return (
    <div className={style.container}>
      {/* <AccessButton text="로그인1"></AccessButton> */}
      <AccessButton>로그인2</AccessButton>
      <LogoButton logo="naver" onClick={onBtnClick}></LogoButton>
      <LogoButton logo="kakao"></LogoButton>
      <LogoButton logo="aaa"></LogoButton>
      <VarInput type="text" label="id"></VarInput>
      <VarInput type="password" label="pass"></VarInput>
      {/* <p>passwordInput</p> */}
      <PasswordInput label="password2"></PasswordInput>
      {/* <MenuItem findType="id"></MenuItem>
      <MenuItem findType="pw"></MenuItem> */}
      <div className={style.container2}>
        <MenuItem findType="id"></MenuItem>
        <MenuItem findType="pw"></MenuItem>
      </div>
      <div className={style.container2}>
        <MenuItem findType="id"></MenuItem>
      </div>
      <div className={style.container2}>
        <MenuItem findType="pw"></MenuItem>
      </div>
    </div>
  );
};

export default LoginContainer;