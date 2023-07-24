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
background: #3E54AC;

text-align: center;
font-family: Noto Sans;
font-style: normal;
font-weight: 700;
line-height: 1rem;

${({ type }) => {
  switch (type) {
    case "findIdPw":
      return `
      height: 3.8125rem;
      color: var(--yoda-admin-template-blacks-b-0, #FFF);
      font-size: 1.5625rem;
      letter-spacing: 0.04688rem;
    `
    default:
      return `
      font-size: 0.875rem;
      color: var(--yoda-admin-template-blacks-b-0, #FFF);
      letter-spacing: 0.02625rem;
    `
  }
}}
`;

const AccessButton = ({children, type, onClick}) => {
  //children은 외부에서 AccessButton 태그 안쪽에 넣는 내용을 받아옴
  //type은 버튼의 디자인을 지정
  //onClick은 onClick 이벤트 메서드를 받아온다
  return (
      <CustomButton1 type={type} onClick={onClick}>{children}</CustomButton1>  
  );
};

export default AccessButton;