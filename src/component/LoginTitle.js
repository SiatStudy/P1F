import React, { Children } from 'react';
import styled from 'styled-components';

const CustomH1 = styled.h1`
color: #3E54AC;
font-family: Noto Sans;
font-size: 2.625rem;
font-style: normal;
font-weight: 600;
line-height: 3rem; 
letter-spacing: -0.0525rem;
`;

const LoginTitle = ({children}) => {
  return (
    <CustomH1>{children}</CustomH1>
  );
};

export default LoginTitle;