import React from 'react';
import style from './TestContainer2.module.css';
import LoginTitle from '../component/LoginTitle';
import FindIdPwWord from '../component/FindIdPwWord';
import UnmatchIdPw from '../component/UnmatchIdPw';
import DuplicateCheckId from '../component/DuplicateCheckId';
import InputNotification from '../component/InputNotification';
// import TestDiv from '../components/TestDiv';

//테스트용 컨테이언2
//추후 삭제 예정

const FindIdContainer = () => {
  //사용하려다 아직 안 쓴 컨테이너 파일
  return (
    <div className={style.container}>
      {/* <TestDiv></TestDiv> */}
      <LoginTitle>로그인페이지</LoginTitle>
      <FindIdPwWord>아디비번찾기</FindIdPwWord>
      <UnmatchIdPw>아디비번이 일치하지 않습니다</UnmatchIdPw>
      <DuplicateCheckId>아이디중복확인완료</DuplicateCheckId>
      <InputNotification type="check">아이디체크</InputNotification>
      <InputNotification>아디비번불일치</InputNotification>
    </div>
  );
};

export default FindIdContainer;