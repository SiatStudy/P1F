import React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from "react";

const CustomSelect = styled.select`
display: flex;
padding: 0.5rem 0.5rem 0.5rem 1rem;
align-items: center;
gap: 1.5rem;
flex: 1 0 0;

border-radius: 0.4375rem;
border: 0.0625rem solid #C2BEBE;
background: var(--yoda-admin-template-blacks-b-0, #FFF);
`;

const EmailSelect = () => {

  const [val,setVal] = useState('email');
  //select의 값을 지정하는 val state 선언

  useEffect(() => {
    console.log(val); // 상태가 업데이트될 때 마다 값 출력
  }, [val]);
  //값이 찍히는걸 보는 테스트용 임시 함수

  const onSelectChange=(e)=>{
    const value = e.target.value;
    setVal(value);
  }
  //onChange로 값이 변경될때마다 변경감지 함수 실행

  return (
      <CustomSelect onChange={onSelectChange} value={val}>
        <option value="email" disabled>이메일 선택</option>
        <option value="naver.com">naver.com</option>
        <option value="google.com">google.com</option>
      </CustomSelect>
  );
};

export default EmailSelect;