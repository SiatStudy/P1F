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

  return (
      <CustomSelect name={name} onChange={onChange} value={value}>
        <option value="email" disabled>이메일 선택</option>
        <option value="naver.com">naver.com</option>
        <option value="google.com">google.com</option>
      </CustomSelect>
  );
};

export default EmailSelect;