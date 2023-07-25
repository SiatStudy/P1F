import React from 'react';
import styled from 'styled-components';

//UnmatchIdPw 컴포넌트와 FindIdPwWord 컴포넌트가 겹치는 부분이 많아 하나로 묶어 새로 작업하는 컴포넌트
const CustomP = styled.p`
font-family: Noto Sans;
font-size: 0.625rem;
font-style: normal;
line-height: 0.875rem; 
letter-spacing: 0.0125rem;
visibility: ${props => props.isVisable ? 'visible' : 'hidden'};
${({ type }) => {
  switch (type) {
    case "check":
      return `
      color: #3E54AC;
      font-weight: 600;
      letter-spacing: 0.0125rem;
    `
    default:
      return `
      color: #ED4545;
      font-weight: 400;
    `
  }
}}
`;

const InputNote = ({children, type, isVisable}) => {
  //children은 외부에서 해당 태그 안쪽에 넣는 내용을 받아옴
  //type은 문장의 디자인을 지정
  //isVisible은 해당 문장의 보이기 여부 지정
  return (
    <CustomP type={type} isVisable={isVisable}>{children}</CustomP>
  );
};

export default InputNote;