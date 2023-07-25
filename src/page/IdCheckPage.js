import React, { useState } from 'react';
import style from './IdCheckPage.module.css';
import FindMenuHeader from '../content/FindMenuHeader';
import VarInput from '../component/VarInput';
import AccessButton from '../component/AccessButton';
import LoginSpan from '../component/LoginSpan';

//아이디 찾기 페이지
const IdCheckPage = () => {

  //input값을 저장하는 객체
  const [vals, setVals] = useState({
    email: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVals((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
    // console.log(value);
  };

  return (
    <div className={style.page}>
      {/* 요소 전체를 묶는 컨테이너 */}
      <div className={style.mainContainer}>
        {/* 컨테이너에서 정의한 메뉴 부분 불러옴 */}
        <FindMenuHeader color1="blue" color2="white"></FindMenuHeader>
        <div>
          <LoginSpan type="blackMessage">회원님의 아이디는</LoginSpan>
          <LoginSpan type="redMessage"> abcd12** </LoginSpan>
          <LoginSpan type="blackMessage">으로 등록되어 있습니다</LoginSpan>
        </div>
        <AccessButton type="findIdPw">로그인 하기</AccessButton>
      </div>
    </div>
  );
};

export default IdCheckPage;