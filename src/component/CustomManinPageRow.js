import React from 'react';
import styled from 'styled-components';

const obj = {
  myPage : {
    keyDiv : `
    color: #8DCBE6;
    font-family: Noto Sans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3125rem; 
    letter-spacing: 0.025rem;
    `,
    customH3 : `
    color: var(--yoda-admin-template-blacks-b-100, #2D3436);
    font-family: Noto Sans;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3125rem; 
    letter-spacing: 0.025rem;
    `,
    outDiv : `
    display: flex;
    align-items: center;
    gap: 2.5rem;
    align-self: stretch;
    `
  },
  searchPage : {
    outDiv : `
    display: flex;
    align-items: center;
    align-self: stretch;
    border-radius: 0.4375rem;
    background: #FFF;
    box-shadow: 0.188rem 0.25rem 0.375rem 0px rgba(0, 0, 0, 0.10);
    `,
    keyDiv : `
    display: flex;
    width: 11.25rem;
    height: 3.125rem;
    padding: 0.75rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    `,
    customH3 :`
    color: #3E54AC;
    font-family: Noto Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0rem; /* 0% */
    letter-spacing: 0.075rem;
    `
  }
};

const KeyDiv = styled.div`
${prop => obj[prop.$page].keyDiv}
`;

const CustomH3 = styled.h3`
${prop => obj[prop.$page].customH3}
display: ${props => (props.$mode ? 'none' : 'block')};
`;

const OutDiv = styled.div`
${prop => obj[prop.$page].outDiv}
`;

const CustomInput = styled.input`
flex: 1 0 0;
border-radius: 0.25rem;
border: 1px solid #000;
display: ${props => (props.$mode ? 'block' : 'none')};
`;

const CustomMainPageRow = ({title, value, $mode, onChange, $page}) => {
  // title : 제목
  // value : 내용
  // $mode : 상태 전환
  // onChange : 이벤트
  
  return (
    <OutDiv $page={$page}>
      <KeyDiv $page={$page}>{title}</KeyDiv>
      <CustomH3 $page={$page} $mode={$mode}>{value}</CustomH3>
      <CustomInput type="text" $mode={$mode} value={value} onChange={(e) => onChange(e.target.value)}></CustomInput>
    </OutDiv>
  );
};

CustomMainPageRow.defaultProps = {
  $page : "myPage"
};

export default CustomMainPageRow;