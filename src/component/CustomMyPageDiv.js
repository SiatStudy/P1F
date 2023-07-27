import React from 'react';
import styled from 'styled-components';

const KeyDiv = styled.div`
width: 10rem;
Copy
color: #8DCBE6;
font-family: Noto Sans KR;
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: 1.3125rem; /* 105% */
letter-spacing: 0.025rem;
`;

const ValueDiv = styled.div`
flex: 1 0 0;
color: var(--yoda-admin-template-blacks-b-100, #2D3436);
font-family: Noto Sans KR;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 1.3125rem;
letter-spacing: 0.025rem;
`;

const OutDiv = styled.div`
display: flex;
align-items: center;
gap: 2.5rem;
align-self: stretch;
`;

const CustomMyPageDiv = () => {
  return (
    <OutDiv>
      <KeyDiv>이름</KeyDiv>
      <ValueDiv>박창윤</ValueDiv>
    </OutDiv>
  );
};

export default CustomMyPageDiv;