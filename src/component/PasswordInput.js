import React from 'react';
import styled from 'styled-components';
import {useState} from "react";

//비밀번호 input용 컴포넌트 파일
const CustomInput = styled.input.attrs({ type: 'password' })`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  border: none;
  `;

const CustomLabel = styled.label`
  color: var(--yoda-admin-template-blacks-b-100, #2D3436);
  font-family: Noto Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; 
`;

const InDiv = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 0.4375rem;
  border: 0.0625rem solid #C2BEBE;
  background: var(--yoda-admin-template-blacks-b-0, #FFF);
  `;
const OutDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
`

const PasswordInput = ({ label }) => {
  //label에서 해당 input의 라밸 지정

  const [val,setVal] = useState('');
  //input 값을 지정하는 val state 선언

  const onInputChange=(e)=>{
    //onChange로 값이 변경될때마다 변경감지 함수 실행
    const value = e.target.value;
    setVal(value);
    console.log(val);
    //값이 찍히는걸 보는 테스트용 console.log
  }

  return (
    <OutDiv>
      <CustomLabel>{label} : </CustomLabel>
      <InDiv>
        <CustomInput onChange={onInputChange} value={val}></CustomInput>
        <img src="/assets/eyeoffline.svg"></img>
      </InDiv>
    </OutDiv>
  );
};

export default PasswordInput;