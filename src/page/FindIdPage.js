import React, { useState } from 'react';
import style from './FindIdPage.module.css';
import FindMenuHeader from '../content/FindMenuHeader';
import VarInput from '../component/VarInput';
import AccessButton from '../component/AccessButton';

//아이디 찾기 페이지
const FindIdPage = () => {

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
        <VarInput type="email" name="email" label="E-mail" size='600' 
        onChange={onInputChange} value={vals.email}/>
        <AccessButton type="findIdPw">ID 찾기</AccessButton>
      </div>
    </div>
  );
};

export default FindIdPage;