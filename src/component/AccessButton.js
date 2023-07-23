import React from 'react';
import styled from 'styled-components';

//메인 로그인 페이지 로그인 버튼
const CustomButton1 = styled.button`
display: flex;
padding: 1rem 2.375rem;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: stretch;
border-radius: 0.4375rem;

text-align: center;
font-family: Noto Sans;
font-style: normal;
line-height: 1rem;

${({ type }) => {
  switch (type) {
    case "signUpIncomplete":
      return `
      background: #EEE;
      color: #959595;
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.02625rem;
    `
    case "signUpComplete":
      return `
      background: #3E54AC;
      color: var(--yoda-admin-template-blacks-b-0, #FFF);
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.02625rem;
    `
    case "findIdPw":
      return `
      height: 3.8125rem;
      background: #3E54AC;
      color: var(--yoda-admin-template-blacks-b-0, #FFF);
      font-size: 1.5625rem;
      font-weight: 700;
      letter-spacing: 0.04688rem;
    `
    default:
      return `
      background: #3E54AC;
      font-weight: 700;
      font-size: 0.875rem;
      color: var(--yoda-admin-template-blacks-b-0, #FFF);
      letter-spacing: 0.02625rem;
    `
  }
}}
`;

const AccessButton = ({children, type}) => {
  return (
      <CustomButton1 type={type}>{children}</CustomButton1>  
  );
};

export default AccessButton;