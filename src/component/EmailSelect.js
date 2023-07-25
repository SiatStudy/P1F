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

const EmailSelect = ({name, onChange, value}) => {
  //name에서 외부에서 받아온 해당 input의 name 지정
  //onChange에서 외부에서 받아온 해당 input의 onChange 이벤트 지정
  //value에서 외부 state값을 value에 저장

  return (
      <CustomSelect name={name} onChange={onChange} value={value}>
        <option value="email" disabled>이메일 선택</option>
        <option value="naver.com">naver.com</option>
        <option value="google.com">google.com</option>
      </CustomSelect>
  );
};

export default EmailSelect;