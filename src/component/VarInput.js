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
gap: 0.5rem;
`

const VarInput = ({type, label, name, onChange, value}) => {
  //type에서 해당 input의 타입 지정
  //label에서 해당 input의 라밸 지정
  //외부에서 받아온 해당 input의 name 지정
  //외부에서 받아온 해당 input의 onChange 이벤트 지정
  // 

  return (
    <CustomDiv>
      <CustomLabel>{label} : </CustomLabel>
      <CustomInput type={type} name={name} onChange={onChange} value={value}></CustomInput>
    </CustomDiv>
  );
};

VarInput.defaultProps = {
  type: 'text'
};

export default VarInput;