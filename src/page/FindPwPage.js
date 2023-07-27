import React, { useState } from 'react';
import style from './FindPwPage.module.css';
import FindMenuHeader from '../content/FindMenuHeader';
import AccessButton from '../component/AccessButton';
import TwoInput from '../content/TwoInput';

const FindPwPage = () => {
  //input값을 저장하는 객체
  const [vals, setVals] = useState({
    id: '',
    email: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVals((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
    console.log(value);
  };

  return (
    <div className={style.page}>
      {/* 요소 전체를 묶는 컨테이너 */}
      <div className={style.mainContainer}>
        {/* 컨테이너에서 정의한 메뉴 부분 불러옴 */}
        <FindMenuHeader color1="white" color2="blue"></FindMenuHeader>
        {/* 컨테이너에서 정의한 input 두개 묶은 div를 불러옴 */}
        <TwoInput
          // 첫 번째 VarInput에 대한 속성
          input1={{
            type: 'text',
            name: 'id',
            label: 'ID'
          }}
          // 두 번째 VarInput에 대한 속성
          input2={{
            type: 'email',
            name: 'email',
            label: 'E-mail'
          }}

        />
        <AccessButton type="findIdPw">비밀번호 찾기</AccessButton>
      </div>
    </div>
  );
};

export default FindPwPage;