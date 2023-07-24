import React from 'react';
import styled from 'styled-components';

// ------ OR ------ 라고 써있는 부분 컴포넌트
const OutDiv = styled.div`
  display: flex;
  width: 22.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Line = styled.div`
flex: 1;
height: 1px;
background-color: var(--yoda-admin-template-blacks-b-80, #636E72);
`;

const Text = styled.div`
  color: var(--yoda-admin-template-blacks-b-80, #636E72);
  font-family: Manrope;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem; 
  letter-spacing: 0.0125rem;
`;

const LineWithText = ({children}) => {
  // children 으로 <LineWithText>태그 안의 내용을 가운데에 표시
  return (
    <OutDiv>
      <Line></Line>
      <Text>{children}</Text>
      <Line></Line>
    </OutDiv>
  );
};

export default LineWithText;
