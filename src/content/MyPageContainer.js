import React from "react";
import style from "./MyPageContainer.module.css";
import CustomMyPageH1 from "../component/CustomMyPageH1";
import CustomMyPageRow from "../component/CustomMyPageRow";

const MypageContainer = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.MypageContainer}>
        <div className={style.title}>
          <CustomMyPageH1>마이페이지</CustomMyPageH1>
          <button className={style.button}>수정</button>
        </div>
        <div className={style.line}></div>
        <div className={style.list}>
          <CustomMyPageRow title="이름" value="박창윤"></CustomMyPageRow>
          <CustomMyPageRow title="닉네임" value="aaa"></CustomMyPageRow>
          <CustomMyPageRow title="Email" value="이메일123"></CustomMyPageRow>
          <CustomMyPageRow
            title="휴대폰 번호"
            value="000-000-0000"
          ></CustomMyPageRow>
          <CustomMyPageRow title="생년월일" value="01/01/01"></CustomMyPageRow>
          <CustomMyPageRow title="주소" value="서울시 무슨동"></CustomMyPageRow>
        </div>
      </div>
      <div className={style.MypageContainer}>
        <div className={style.title}>
          <CustomMyPageH1>버전</CustomMyPageH1>
        </div>
        <div className={style.line}></div>
        <div className={style.list}>
          <CustomMyPageRow title="언어" value="한국어"></CustomMyPageRow>
          <CustomMyPageRow title="업데이트" value="2000.01.01"></CustomMyPageRow>
          <CustomMyPageRow title="버전" value="1.1.1"></CustomMyPageRow>
        </div>
      </div>
    </div>
  );
};

export default MypageContainer;
