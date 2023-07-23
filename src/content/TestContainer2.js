import React from 'react';
import style from './TestContainer2.module.css';
import LoginTitle from '../component/LoginTitle';
import LoginSpan from '../component/LoginSpan';
import InputNotification from '../component/InputNotification';
import EmailSelect from '../component/EmailSelect';
// import TestDiv from '../components/TestDiv';

//테스트용 컨테이언2
//추후 삭제 예정

const TestContainer2 = () => {
  //사용하려다 아직 안 쓴 컨테이너 파일
  return (
    <div className={style.container}>
      {/* <TestDiv></TestDiv> */}
      <LoginTitle>로그인페이지</LoginTitle>
      <InputNotification type="check">아이디중복확인완료2</InputNotification>
      <InputNotification>아디비번 일치하지않습니다2</InputNotification>
      <div>
        <LoginSpan type="findIdPw">아디찾기</LoginSpan>
        <LoginSpan type="findIdPw">/</LoginSpan>
        <LoginSpan type="findIdPw">비밀번호찾기</LoginSpan>
      </div>
      <div>
        <LoginSpan>아직 회원이 아니신가요?</LoginSpan>
        <LoginSpan type="link">회원가입Link</LoginSpan>
      </div>
      <div>
        <LoginSpan type="blackMessage">회원님의 아이디는</LoginSpan>
        <LoginSpan type="redMessage">aaa1234</LoginSpan>
        <LoginSpan type="blackMessage">입니다</LoginSpan>
      </div>
      <div className={style.container2}>
        <EmailSelect></EmailSelect>
      </div>
    </div >
  );
};

export default TestContainer2;