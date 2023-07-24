import React from 'react';
import styled from 'styled-components';

//UnmatchIdPw 컴포넌트와 FindIdPwWord 컴포넌트가 겹치는 부분이 많아 하나로 묶어 새로 작업하는 컴포넌트
const CustomP = styled.p`
font-family: Noto Sans;
font-size: 0.625rem;
font-style: normal;
line-height: 0.875rem; 
letter-spacing: 0.0125rem;
${({ type }) => {
  switch (type) {
    case "check":
      return `
      color: #3E54AC;
      font-weight: 600;
      letter-spacing: 0.0125rem;
    `
    default:
      return `
      color: #ED4545;
      font-weight: 400;
    `
  }
}}
`;

const InputNote = ({children, type}) => {
  return (
    <CustomP type={type}>{children}</CustomP>
  );
};

export default InputNote;