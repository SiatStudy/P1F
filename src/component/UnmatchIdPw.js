import React from 'react';
import styled from 'styled-components';

//아이디, 비밀번호가 맞지 않을 때 나오는 경고문구의 글씨 디자인 지정
//InputNotification.js 로 병합 후 삭제예정
const CustomP = styled.p`
color: #ED4545;
font-family: Noto Sans;
font-size: 0.625rem;
font-style: normal;
font-weight: 400;
line-height: 0.875rem; 
letter-spacing: 0.0125rem;
`;

const UnmatchIdPw = ({children}) => {
  return (
    <CustomP>{children}</CustomP>
  );
};

export default UnmatchIdPw;