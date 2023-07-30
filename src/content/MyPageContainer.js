import React, { useState } from "react";
import style from "./MyPageContainer.module.css";
import CustomMyPageH1 from "../component/CustomMyPageH1";
import CustomMyPageRow from "../component/CustomMyPageRow";


const MypageContainer = () => {
  //편집 상태 전환 state
  const [editMode, setEditMode] = useState(false);
  //마이페이지 값을 담는 객체
  const [obj, setObj] = useState({
    name: "홍길동",
    nickName: "aaa",
    email: "aaaa@gmail.com",
    phoneNumber: "000-000-0000",
    birthDay: "2000/01/01",
    address: "무슨시 무슨동",
  });
  const [editedObj, setEditedObj] = useState({ ...obj });
  // 편집 중인 내용을 따로 저장하는 상태

  const toggleEditMode = () => {
    if (editMode) {
      // "확인" 버튼을 눌렀을 때
      setObj({ ...editedObj }); // 편집한 내용을 저장하고
    } else {
      // "수정" 버튼을 눌렀을 때
      setEditedObj({ ...obj }); // 현재 obj를 편집 중인 내용으로 초기화
    }
    setEditMode((mode) => !mode); // editMode를 토글
  };
  const cancellEditMode = () => {
    setEditedObj({ ...obj }); // 현재 obj를 편집 중인 내용으로 초기화
    setEditMode((mode) => !mode); // editMode를 토글
  };

  const onInputChange = (property, value) => {
    setEditedObj((editedObj) => ({
      ...editedObj,
      [property]: value
    }));
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.MypageContainer}>
        <div className={style.title}>
          <CustomMyPageH1>마이페이지</CustomMyPageH1>
          {editMode && <button className={style.button} onClick={cancellEditMode}>취소</button>}
          <button className={style.button} onClick={toggleEditMode}>
            {editMode ? "확인" : "수정"}
          </button>
        </div>
        <div className={style.list}>
          <CustomMyPageRow
            title="이름"
            value={editMode ? editedObj.name : obj.name}
            $mode={editMode}
            onChange={(value) => onInputChange("name", value)}
          ></CustomMyPageRow>
          <CustomMyPageRow
            title="닉네임"
            value={editMode ? editedObj.nickName : obj.nickName}
            $mode={editMode}
            onChange={(value) => onInputChange("nickName", value)}
          ></CustomMyPageRow>
          <CustomMyPageRow
            title="Email"
            value={editMode ? editedObj.email : obj.email}
            $mode={editMode}
            onChange={(value) => onInputChange("email", value)}
          ></CustomMyPageRow>
          <CustomMyPageRow
            title="휴대폰 번호"
            value={editMode ? editedObj.phoneNumber : obj.phoneNumber}
            $mode={editMode}
            onChange={(value) => onInputChange("phoneNumber", value)}
          ></CustomMyPageRow>
          <CustomMyPageRow
            title="생년월일"
            value={editMode ? editedObj.birthDay : obj.birthDay}
            $mode={editMode}
            onChange={(value) => onInputChange("birthDay", value)}
          ></CustomMyPageRow>
          <CustomMyPageRow
            title="주소"
            value={editMode ? editedObj.address : obj.address}
            $mode={editMode}
            onChange={(value) => onInputChange("address", value)}
          ></CustomMyPageRow>
        </div>
      </div>
      <div className={style.MypageContainer}>
        <div className={style.title}>
          <CustomMyPageH1>버전</CustomMyPageH1>
        </div>
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