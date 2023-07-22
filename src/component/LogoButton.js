import React from 'react';
import styled from 'styled-components';

//로그인페이지 네이버, 카카오 로그인 버튼 컴포넌트 파일
const CustomButton1 = styled.button`
  display: flex;
  padding: 1rem 2.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.4375rem;

  text-align: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  font-size: 0.9375rem;
  letter-spacing: 0.02813rem;

  ${({ type }) => {
    switch (type) {
      case "naver":
        return `
        background: #03C75A;
        color: #FFF;
      `
      default:
        return `
        background: #FEE500;
        color: #000;
      `
    }
  }}
`;

const LogoButton = ({ type }) => {
  // 로고 유형에 따라 이미지 소스와 텍스트를 정의합니다.
  let logoImageSrc, buttonText;
  switch (type) {
    case "naver":
      logoImageSrc = "/assets/naverlogo.svg";
      buttonText = "네이버";
      break;
    case "kakao":
      logoImageSrc = "/assets/kakaologo.svg";
      buttonText = "카카오";
      break;
    default:
      // 올바른 값이 들어오지 않았을 경우 수행
      try {
        throw "LogoButton에 올바른 prop가 들어오지 않았어요"
      } catch (e){
        console.log(e);
      }
  }

  return (
    <CustomButton1 type={type}>
      <img src={logoImageSrc} alt={type} />
      {buttonText}
    </CustomButton1>
  );
};


export default LogoButton;