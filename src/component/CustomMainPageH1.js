import React from 'react';
import styled, { css } from 'styled-components';

const CustomMainPageH1 = styled.h1`
font-family: Noto Sans;
font-style: normal;
font-weight: 700;
font-size: 1.875rem;

${props => props.$myPage && css`
color: #3E54AC;
line-height: 150%; /* 2.8125rem */
letter-spacing: -0.0375rem;
flex: 1;
`}

${props => props.$searchPageYear && css`
color: #3E54AC;
line-height: 1rem; /* 53.333% */
`}
`;

export default CustomMainPageH1;
