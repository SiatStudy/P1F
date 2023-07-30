import React from 'react';
import styled from 'styled-components';

const KeyDiv = styled.div`
width: 10rem;
color: #8DCBE6;
font-family: Noto Sans KR;
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: 1.3125rem; /* 105% */
letter-spacing: 0.025rem;
`;

const CustomH3 = styled.h3`
color: var(--yoda-admin-template-blacks-b-100, #2D3436);
font-family: Noto Sans KR;
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 1.3125rem; /* 105% */
letter-spacing: 0.025rem;
display: ${props => (props.$mode ? 'none' : 'block')};
`;

const OutDiv = styled.div`
display: flex;
align-items: center;
gap: 2.5rem;
align-self: stretch;
`;

const CustomInput = styled.input`
flex: 1 0 0;

border-radius: 0.25rem;
border: 1px solid #000;
display: ${props => (props.$mode ? 'block' : 'none')};
`;

const CustomMyPageRow = ({title, value, $mode, onChange}) => {
  // title : 제목
  // value : 내용
  // $mode : 상태 전환
  // onChange : 이벤트
  
  return (
    <OutDiv>
      <KeyDiv>{title}</KeyDiv>
      <CustomH3 $mode={$mode}>{value}</CustomH3>
      <CustomInput type="text" $mode={$mode} value={value} onChange={(e) => onChange(e.target.value)}></CustomInput>
    </OutDiv>
  );
};

export default CustomMyPageRow;