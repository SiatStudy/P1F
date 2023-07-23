import React from 'react';
import style from './TestContainer1.module.css';
import {useState} from "react";
import LogoButton from '../component/LogoButton';
import AccessButton from '../component/AccessButton';
import VarInput from '../component/VarInput';
import PasswordInput from '../component/PasswordInput';
import MenuItem from '../component/MenuItem';
import SignUpButton from '../component/SignUpButton';

//테스트용 컨테이너1
//추후 삭제예정
const [mode, setMode] = useState(false);

const onBtnClick=()=>{
  console.log("버튼클릭");
}

const togleMode=()=>{
  setMode(mode=>!mode);
}


const TestContainer1 = () => {
  //컴포넌트 테스트용 임시 컨테이너
  return (
    <div className={style.container}>
      {/* <AccessButton text="로그인1"></AccessButton> */}
      <AccessButton onClick={onBtnClick}>로그인</AccessButton>
      <AccessButton type="signUpIncomplete">회원가입 미완료</AccessButton>
      <AccessButton type="signUpComplete">회원가입 완료</AccessButton>
      <AccessButton type="findIdPw">아이디 찾기</AccessButton>
      <AccessButton onClick={togleMode}>mode변환</AccessButton>
      <SignUpButton mode={mode}>회원가입</SignUpButton>
      
      <LogoButton type="naver" onClick={onBtnClick}></LogoButton>
      <LogoButton type="kakao"></LogoButton>
      {/* <LogoButton type="aaa"></LogoButton> */}
      <VarInput type="text" label="id"></VarInput>
      <VarInput type="password" label="pass"></VarInput>
      {/* <p>passwordInput</p> */}
      <PasswordInput label="password2"></PasswordInput>
      {/* <MenuItem type="id"></MenuItem>
      <MenuItem type="pw"></MenuItem> */}
      <div className={style.container2}>
        <MenuItem type="id"></MenuItem>
        <MenuItem type="pw"></MenuItem>
      </div>
      <div className={style.container2}>
        <MenuItem type="id"></MenuItem>
      </div>
      <div className={style.container2}>
        <MenuItem type="pw"></MenuItem>
      </div>
    </div>
  );
};

export default TestContainer1;