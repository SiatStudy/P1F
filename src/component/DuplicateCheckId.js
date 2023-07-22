import React from 'react';
import styled from 'styled-components';

//아이디 중복환인 완료시 나오는 글시의 디자인 지정
//InputNotification.js 로 병합 후 삭제예정
const CustomP = styled.p`
color: #3E54AC;
font-family: Noto Sans;
font-size: 0.625rem;
font-style: normal;
font-weight: 600;
line-height: 0.875rem; 
letter-spacing: 0.0125rem;
`;

const DuplicateCheckId = ({children}) => {
  return (
    <CustomP>{children}</CustomP>
  );
};

export default DuplicateCheckId;