import React from 'react';
import styled from 'styled-components';

const CustomSpan = styled.span`
font-family: Noto Sans;
font-style: normal;
${({ type }) => {
  switch (type) {
    //findLink는 아이디/비밀번호 찾기 span
    //signUpLink는 회원가입 link span
    //blackMessage는 까만 안내문구 span
    //redMessage는 빨간 안내문구 span
    //디폴트는 회원가입 link옆의 까만 글씨
    case "findLink":
      return `
      color: #B2BEC3;
      text-align: right;
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1rem; 
      letter-spacing: 0.02063rem;
    `
    case "signUpLink":
      return `
      color: #3E54AC;
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.125rem; 
      letter-spacing: 0.0225rem;
    `
    case "blackMessage":
      return `
      color: #000;
      font-size: 1.4375rem
      font-weight: 500;
      line-height: 1rem; 
      letter-spacing: 0.04688rem;
    `
    case "redMessage":
      return `
      color: #D83A3A;
      text-align: center;
      font-size: 1.4375rem
      font-weight: 500;
      line-height: 1rem; 
      letter-spacing: 0.04688rem;
    `
    default:
      return `
      color: var(--yoda-admin-template-blacks-b-80, #636E72);
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.125rem;
      letter-spacing: 0.0225rem;
    `
  }
}}
`;


const LoginSpan = ({children, type, onClick}) => {
  //children은 외부에서 해당 태그 안쪽에 넣는 내용을 받아옴
  //type은 버튼의 디자인을 지정
  //onClick은 onClick 이벤트 메서드를 받아온다
  return (
    <CustomSpan type={type} onClick={onClick}>{children}</CustomSpan>
  );
};

export default LoginSpan;