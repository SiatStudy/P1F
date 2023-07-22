import React from 'react';
import styled from 'styled-components';

//여러가지 input타입을 받는 컴포넌트 파일
const CustomInput = styled.input`
  display: flex;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 0.4375rem;
  border: 0.0625rem solid #C2BEBE;
  background: var(--yoda-admin-template-blacks-b-0, #FFF);
  `;

  const CustomLabel = styled.label`
  color: var(--yoda-admin-template-blacks-b-100, #2D3436);
  font-family: Noto Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;; 
`;
const CustomDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
`

const VarInput = ({type, label}) => {
  return (
    <CustomDiv>
      <CustomLabel>{label} : </CustomLabel>
      <CustomInput type={type}></CustomInput>
    </CustomDiv>
  );
};

VarInput.defaultProps = {
  type: 'text'
};

export default VarInput;