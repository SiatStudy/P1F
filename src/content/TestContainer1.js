import React from 'react';
import style from './TestContainer1.module.css';
import {useState} from "react";
import LogoButton from '../component/LogoButton';
import AccessButton from '../component/AccessButton';
import VarInput from '../component/VarInput';
import PasswordInput from '../component/PasswordInput';
import MenuItem from '../component/MenuItem';
import SignUpButton from '../component/SignUpButton';
import EmailSelect from '../component/EmailSelect';

//테스트용 컨테이너1
//추후 삭제예정
const TestContainer1 = () => {
  //컴포넌트 테스트용 임시 컨테이너

  //버튼의 디자인 상태를 변경하는 mode를 state로 선언
  const [mode, setMode] = useState(false);
  const [vals, setVals] = useState({
    input1: '',
    input2: '',
    input3: '',
    select1: 'email'
  });
  //input 값을 지정하는 val state 선언

  // const onInputChange=(e)=>{
  //   //onChange로 값이 변경될때마다 변경감지 함수 실행
  //   const value = e.target.value;
  //   setVal(value);
  //   console.log(val);
  //   //값이 찍히는걸 보는 테스트용 console.log
  // }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVals((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
    console.log(value);
  };

  //임시 버튼 onClick메서드
  const onBtnClick=()=>{
    console.log("버튼클릭");
  }

  //임시 mode 값 변경 메서드
  const togleMode=()=>{
    setMode(mode=>!mode);
  }

  return (
    <div className={style.container}>
      {/* <AccessButton text="로그인1"></AccessButton> */}
      <AccessButton onClick={onBtnClick}>로그인</AccessButton>
      <AccessButton type="findIdPw">아이디 찾기</AccessButton>
      <AccessButton onClick={togleMode}>mode변환</AccessButton>
      <SignUpButton mode={mode.toString()}>회원가입</SignUpButton>
      
      <LogoButton type="naver" onClick={onBtnClick}></LogoButton>
      <LogoButton type="kakao"></LogoButton>
      {/* <LogoButton type="aaa"></LogoButton> */}

      <VarInput type="text" label="id" name="input1" onChange={onInputChange} value={vals.input1}></VarInput>
      <VarInput type="password" label="pass" name="input2" onChange={onInputChange} value={vals.input2}></VarInput>
      {/* <p>passwordInput</p> */}
      <PasswordInput label="password2" name="input3" onChange={onInputChange} value={vals.input3}></PasswordInput>
      <EmailSelect name="select1" onChange={onInputChange} value={vals.select1}></EmailSelect>
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