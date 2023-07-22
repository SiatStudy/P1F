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

color: var(--yoda-admin-template-blacks-b-0, #FFF);
children-align: center;
font-family: Noto Sans;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 1rem;
letter-spacing: 0.02625rem;
`;

const AccessButton = ({children}) => {
  return (
      <CustomButton1>{children}</CustomButton1>  
  );
};

export default AccessButton;