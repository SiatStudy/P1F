import React from 'react';
import styled from 'styled-components';

//테스트용 임시파일
const CustomDiv = styled.div`
width: 500px;
height: 500px;`

const CustomButton = styled.button`
width: 100px;
height: 100px;
background: #03C75A;
color: #FFF;
`
const onBtnClick= () => {
  console.log("버튼클릭");
}

const TestDiv = () => {
  return (
    <CustomDiv>
      <CustomButton onClick={onBtnClick}>버튼1</CustomButton>
      <CustomButton onClick={onBtnClick}>버튼2</CustomButton>
    </CustomDiv>
  );
};

export default TestDiv;