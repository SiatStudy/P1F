import React, { useState } from 'react';
import style from './PwChangePage.module.css';
import AccessButton from '../component/AccessButton';
import TwoInput from '../content/TwoInput';
import MenuItem from '../component/MenuItem';

const PwChangePage = () => {
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
        <div className={style.headContainer}>
          <MenuItem color="whiteBlur">비밀번호 찾기</MenuItem>
        </div>

        {/* 컨테이너에서 정의한 input 두개 묶은 div를 불러옴 */}
        <TwoInput
          // 첫 번째 VarInput에 대한 속성
          input1={{
            type: 'password',
            name: 'password1',
            label: '비밀번호'
          }}
          // 두 번째 VarInput에 대한 속성
          input2={{
            type: 'password',
            name: 'password2',
            label: '비밀번호 확인'
          }}
        />
        <AccessButton type="findIdPw">비밀번호 변경</AccessButton>
      </div>
    </div>
  );
};

export default PwChangePage;