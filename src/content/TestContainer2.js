import React from 'react';
import style from './TestContainer2.module.css';
import LoginTitle from '../component/LoginTitle';
import FindIdPwWord from '../component/FindIdPwWord';
import InputNotification from '../component/InputNotification';
// import TestDiv from '../components/TestDiv';

//테스트용 컨테이언2
//추후 삭제 예정

const TestContainer2 = () => {
  //사용하려다 아직 안 쓴 컨테이너 파일
  return (
    <div className={style.container}>
      {/* <TestDiv></TestDiv> */}
      <LoginTitle>로그인페이지</LoginTitle>
      <FindIdPwWord>아디찾기/비밀번호찾기</FindIdPwWord>
      <InputNotification type="check">아이디중복확인완료2</InputNotification>
      <InputNotification>아디비번 일치하지않습니다2</InputNotification>
    </div>
  );
};

export default TestContainer2;