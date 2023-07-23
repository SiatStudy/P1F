import React from 'react';
import styled from 'styled-components';

const CustomSpan = styled.span`
font-family: Noto Sans;
font-style: normal;
${({ type }) => {
  switch (type) {
    case "findIdPw":
      return `
      color: #B2BEC3;
      text-align: right;
      font-size: 0.6875rem;
      font-weight: 600;
      line-height: 1rem; 
      letter-spacing: 0.02063rem;
    `
    case "link":
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
      font-size: 1.5625rem;
      font-weight: 500;
      line-height: 1rem; 
      letter-spacing: 0.04688rem;
    `
    case "redMessage":
      return `
      color: #D83A3A;
      text-align: center;
      font-size: 1.5625rem;
      font-weight: 500;
      line-height: 1rem; 
      letter-spacing: 0.04688rem;
    `
    default:
      return `
      color: var(--yoda-admin-template-blacks-b-80, #636E72);
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.125rem; /* 150% */
      letter-spacing: 0.0225rem;
    `
  }
}}
`;


const LoginSpan = ({children, type}) => {
  return (
    <CustomSpan type={type}>{children}</CustomSpan>
  );
};

export default LoginSpan;