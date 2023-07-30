import React, { useState } from "react";
import style from "./MyPageContainer.module.css";
import CustomMyPageH1 from "../component/CustomMyPageH1";
import CustomMyPageRow from "../component/CustomMyPageRow";

const MypageContainer = () => {
  const [editMode, setEditMode] = useState(false);
  const [obj, setObj] = useState({
    name: "홍길동",
    nickName: "aaa",
    email: "aaaa@gmail.com",
    phoneNumber: "000-000-0000",
    birthDay: "2000/01/01",
    address: "무슨시 무슨동",
  });
  const [editedObj, setEditedObj] = useState({ ...obj });

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
      [property]: value,
    }));
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.MypageContainer}>
        <div className={style.title}>
          <CustomMyPageH1>마이페이지</CustomMyPageH1>
          {editMode && (
            <button className={style.button} onClick={cancellEditMode}>
              취소
            </button>
          )}
          <button className={style.button} onClick={toggleEditMode}>
            {editMode ? "확인" : "수정"}
          </button>
        </div>
        <div className={style.list}>
          {/* 여기서 각 항목들을 렌더링합니다 */}
          <CustomMyPageRow
            title="이름"
            value={editMode ? editedObj.name : obj.name}
            $mode={editMode}
            onChange={(value) => onInputChange("name", value)}
          />
          <CustomMyPageRow
            title="닉네임"
            value={editMode ? editedObj.nickName : obj.nickName}
            $mode={editMode}
            onChange={(value) => onInputChange("nickName", value)}
          />
          {/* ... 이하 생략 ... */}
        </div>
      </div>
      <div className={style.MypageContainer}>
        {/* 이 부분은 버전 정보를 표시하는 부분으로 위 예시에서는 건너뜁니다 */}
      </div>
    </div>
  );
};

export default MypageContainer;
