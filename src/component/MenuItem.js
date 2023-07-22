import React from 'react';
import styled from 'styled-components';

//아이디 찾기, 비밀번호 찾기 컴포넌트 파일
const CustomDiv = styled.div`
  display: flex;
  height: 4.25rem;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-bottom: 0.1875rem solid #3E54AC;

  text-align: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: 0.03rem;

  ${({findType}) => {
    switch(findType){
      case "id" :
        return `
        background: #E3F6FF;
        color: #3E54AC;
        `
      default :
        return `
        color: var(--yoda-admin-template-blacks-b-80, #636E72);
      `
  }
}}
`;

const MenuItem = ({findType}) => {
  let divText;
  switch (findType) {
    case "id":
      divText = "ID 찾기";
      break;
    case "pw":
      divText = "비밀번호 찾기";
      break;
    default:
      // 올바른 값이 들어오지 않았을 경우 수행
      try {
        throw "MenuItem에 올바른 prop가 들어오지 않았어요"
      } catch (e){
        console.log(e);
      }
  }
  return (
    <CustomDiv findType={findType}>{divText}</CustomDiv>
  );
};

export default MenuItem;