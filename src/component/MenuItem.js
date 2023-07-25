import React from 'react';
import styled from 'styled-components';

const object = {
  //기존 switch문 대신 객체로 스타일 지정
  blue : `
    background: #E3F6FF;
    color: #3E54AC;
  `,
  white : `
    color: var(--yoda-admin-template-blacks-b-80, #636E72);
  `
};

//아이디 찾기, 비밀번호 찾기 컴포넌트 파일
const CustomDiv = styled.div`
  display: flex;
  height: 4.25rem;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-bottom: 0.1875rem solid #3E54AC;

  text-align: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: 0.03rem;

  ${prop => object[prop.color]}
`;

const MenuItem = ({color, children}) => {
  //type은 메뉴 아이콘의 디자인을 지정
  return (
    <CustomDiv color={color}>{children}</CustomDiv>
  );
};

export default MenuItem;