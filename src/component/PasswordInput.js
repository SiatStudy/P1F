import React from 'react';
import styled from 'styled-components';

//비밀번호 input용 컴포넌트 파일
const CustomInput = styled.input.attrs({ type: 'password' })`
  display: flex;
  align-items: center;
  flex: 1 0 0;
  border: none;
  `;

const CustomLabel = styled.label`
  color: var(--yoda-admin-template-blacks-b-100, #2D3436);
  font-family: Noto Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; 
`;

const InDiv = styled.div`
  display: flex;
  padding: 0.75rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 0.4375rem;
  border: 0.0625rem solid #C2BEBE;
  background: var(--yoda-admin-template-blacks-b-0, #FFF);
  `;
const OutDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
`

const PasswordInput = ({ label }) => {
  return (
    <OutDiv>
      <CustomLabel>{label} : </CustomLabel>
      <InDiv>
        <CustomInput></CustomInput>
        <img src="/assets/eyeoffline.svg"></img>
      </InDiv>
    </OutDiv>
  );
};

export default PasswordInput;