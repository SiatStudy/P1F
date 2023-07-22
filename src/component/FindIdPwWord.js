import React from 'react';
import styled from 'styled-components';

const CustomSpan = styled.span`
color: #B2BEC3;
text-align: right;
font-family: Noto Sans;
font-size: 0.6875rem;
font-style: normal;
font-weight: 600;
line-height: 1rem; 
letter-spacing: 0.02063rem;
`;


const FindIdPwWord = ({children}) => {
  return (
    <CustomSpan>{children}</CustomSpan>
  );
};

export default FindIdPwWord;