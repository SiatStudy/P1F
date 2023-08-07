import React, { useEffect, useState } from "react";
import style from "./MyPageContainer.module.css";
import CustomMainPageH1 from "../component/CustomMainPageH1";
import CustomMainPageRow from "../component/CustomManinPageRow";
import { dummyData1 as dummy } from "../apis/dummyData1";

const MyPageContainer = () => {
  //편집 상태 전환 state
  const [editMode, setEditMode] = useState(false);
  //마이페이지 값을 담는 state 객체
  const [dataObj, setDataObj] = useState({});
  const [editedObj, setEditedObj] = useState({});
  // 편집 중인 내용을 따로 저장하는 state 객체

  //처음 랜더링 시에만 실행
  //더미데이터를 state객체에 할당
  useEffect(() => {
    setDataObj(dummy[5]);
  }, []);

  const toggleEditMode = () => {
    if (editMode) {
      // "확인" 버튼을 눌렀을 때
      setDataObj({ ...editedObj }); // 편집한 내용을 저장하고
    } else {
      // "수정" 버튼을 눌렀을 때
      setEditedObj({ ...dataObj }); // 현재 dataObj를 편집 중인 내용으로 초useEffect기화
    }
    setEditMode((mode) => !mode); // editMode를 토글
  };
  //취소 버튼을 눌렀을 때
  const cancellEditMode = () => {
    setEditedObj({ ...dataObj }); // 현재 obj를 편집 중인 내용으로 초기화
    setEditMode((mode) => !mode); // editMode를 토글
  };

  const onInputChange = (property, value) => {
    setEditedObj((editedObj) => ({
      ...editedObj,
      [property]: value,
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault(); // 기본 서브밋 동작 방지
    toggleEditMode();
};

  return (
    <div className={style.mainContainer}>
      <form onSubmit={onSubmitForm}>
        <div className={style.MyPageContainer}>
          <div className={style.title}>
            <CustomMainPageH1 $myPage>마이페이지</CustomMainPageH1>
            {editMode && (
              <button className={style.button} onClick={cancellEditMode}>
                취소
              </button>
            )}
            <button className={style.button} >
              {editMode ? "확인" : "수정"}
            </button>
          </div>
          <div className={style.list}>
            <CustomMainPageRow
              title="닉네임"
              value={editMode ? editedObj.nickName : dataObj.nickName}
              $mode={editMode}
              pattern="[a-zA-Z가-힣]{3,16}"
              $inputTitle="3~16 글자를 입력해야 합니다."
              onChange={(value) => onInputChange("nickName", value)}
            ></CustomMainPageRow>
            <CustomMainPageRow
              title="Email"
              value={dataObj.email}
            ></CustomMainPageRow>
          </div>
        </div>
        <div className={style.MyPageContainer}>
          <div className={style.versionTitle}>
            <CustomMainPageH1 $myPage>버전</CustomMainPageH1>
          </div>
          <div className={style.list}>
            <CustomMainPageRow title="언어" value="한국어"></CustomMainPageRow>
            <CustomMainPageRow
              title="업데이트"
              value="2023.08.10"
            ></CustomMainPageRow>
            <CustomMainPageRow title="버전" value="1.0.1"></CustomMainPageRow>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyPageContainer;
