import React from 'react';
import styled from 'styled-components';

//회원가입 페이지 버튼
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
font-size: 0.875rem;
font-weight: 600;
line-height: 1rem;
letter-spacing: 0.02625rem;

${({ mode }) => {
  switch (mode) {
    case "true":
      return `
      background: #3E54AC;
      color: var(--yoda-admin-template-blacks-b-0, #FFF);
    `
    default:
      return `
      background: #EEE;
      color: #959595;
    `
  }
}}
`;

const SignUpButton = ({children, mode, onClick}) => {
  //children은 외부에서 SignUpButton 태그 안쪽에 넣는 내용을 받아옴
  //mode은 외부의 mode state에 따른 버튼의 디자인을 지정
  //onClick은 onClick 이벤트 메서드를 받아온다
  return (
      <CustomButton1 mode={mode} onClick={onClick}>{children}</CustomButton1>  
  );
};

export default SignUpButton;