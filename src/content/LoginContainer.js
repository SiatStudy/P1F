import React from 'react';
import style from './LoginContainer.module.css';
import { useState } from "react";
import PasswordInput from '../component/PasswordInput';
import InputNote from '../component/InputNote';
import VarInput from '../component/VarInput';
import LoginSpan from '../component/LoginSpan';
import AccessButton from '../component/AccessButton';
import LogoButton from '../component/LogoButton';
import LineWithText from '../component/LineWithText';
import LoginTitle from '../component/LoginTitle';

const LoginContainer = () => {
  // 로그인 화면 컨테이너

  const [isVisible, setIsVisible] = useState(false);
  //input아래 알림문구 보이는 유무 지정하는 state

  //input값을 저장하는 객체
  const [vals, setVals] = useState({
    id: '',
    password: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVals((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
    console.log(value);
  };

  //input아래 문구 유무 토글 메서드
  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className={style.mainContainer}>
      {/* 메인 div */}
      <LoginTitle>로그인</LoginTitle>
      <form action="#" method="post">
      <div className={style.formContainer}>
        {/* input, button, line 들을 감싸는 div */}
        <div className={style.linkContainer}>
          {/* inputContainer와 아이디/비밀번호 찾기 span들 감싼 div를 감싸는 div */}
          <div className={style.inputContainer}>
            {/* 아이디 비밀번호 input을 감싸는 div */}
            <VarInput type="text" label="id" name="id" onChange={onInputChange} 
            value={vals.input1}></VarInput>
            <div className={style.passwordContainer}>
              {/* 비밀번호 input과 아래 경고문구를 감싸는 div */}
              <PasswordInput label="password" name="password" onChange={onInputChange}
                value={vals.password}></PasswordInput>
              <InputNote isVisible={isVisible}>아이디 또는 비밀번호를 확인해주세요</InputNote>
              {/* 아이디, 비밀번호가 일치하지 않을 경우 해당 문구가 보임 */}
            </div>
          </div>
          <div>
            {/* span태그들을 div로 묶음 */}
            <LoginSpan type="findLink">ID 찾기</LoginSpan>
            <LoginSpan type="findLink"> / </LoginSpan>
            <LoginSpan type="findLink">비밀번호 찾기</LoginSpan>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <AccessButton>로그인</AccessButton>
          <div>
            <LoginSpan>아직 회원이 아니십니까? </LoginSpan>
            <LoginSpan type="signUpLink">회원가입</LoginSpan>
          </div>
        </div>
        <LineWithText>OR</LineWithText>
        <div className={style.logoButtonContainer}>
          {/* LogoButton 두개를 감싼 div */}
          <LogoButton type="naver"></LogoButton>
          <LogoButton type="kakao"></LogoButton>
        </div>
      </div>
      </form>
    </div>
  );
};

export default LoginContainer;