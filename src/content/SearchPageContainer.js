import React, { useState, useEffect } from 'react';
import style from './SearchPageContainer.module.css'
import CustomMainPageH1 from '../component/CustomMainPageH1';
import CustomMainPageRow from '../component/CustomManinPageRow';
import { dummyData2 } from '../apis/dummyData2';
import { useSelector, useDispatch } from "react-redux";
import { returnData } from "../store/searchData";


const SearchPageContainer = () => {
  // useSelector를 통해 리듀서에 저장된 데이터에 접근이 가능해짐
  const state = useSelector(state => state);
  // dispatch와 actionCreater 함수를 조합해서 action을 생성한다.
  const dispatch = useDispatch();

  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear, setCurrentYear] = useState(2023);
  const [searchDataArr, setSearchDataArr] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  //처음 랜더링 시에만 실행
  //더미데이터를 state배열에 할당
  useEffect(() => {
    const currentDate = new Date();
    setCurrentMonth(currentDate.getMonth() + 4);
    setCurrentYear(currentDate.getFullYear())
    setSearchDataArr(dummyData2);
    setSearchWord(dispatch(returnData()));
    console.log(searchDataArr);
  }, []);

  // 월별 작업 데이터 정렬 및 필터링하는 함수
  const getFilteredData = () => {
    let thisYearData = searchDataArr.filter(obj => (obj.year == parseInt(currentYear)));
    const regex = new RegExp(searchWord, "gi");
    thisYearData = thisYearData.filter(obj=>(obj.workTitle.match(regex)));


    // 데이터 정렬 (낮은 순으로 정렬 -> 같은 월일 경우 startDay로 정렬 -> 같은 월, startDay일 경우 endDay로 정렬)
    const sortedData = thisYearData.sort((a, b) => {
      if (a.month !== b.month) {
        return a.month - b.month;
      } else if (a.startDay !== b.startDay) {
        return a.startDay - b.startDay;
      } else {
        return a.endDay - b.endDay;
      }
    });

   // 정렬된 데이터를 월별로 그룹화
   const groupedData = {};
   sortedData.forEach((data) => {
     const { month } = data;
     if (!groupedData[month]) {
       groupedData[month] = [];
     }
     groupedData[month].push(data);
   });

   // 각 월별로 최대 3개까지만 출력하도록 필터링
   const filteredData = Object.entries(groupedData).reduce((acc, [month, data]) => {
     if (parseInt(month, 10) >= (currentMonth - 1) && parseInt(month, 10) <= (currentMonth + 1)) {
       acc[month] = data.slice(0, 3);
     }
     return acc;
   }, {});
   return filteredData;
 };

 const filteredData = getFilteredData();

 return (
   <div className={style.mainContainer}>
     {/* 월별로 그룹화된 작업 데이터 순회 (각 월별 작업 표시) */}
     {Object.entries(filteredData).map(([month, works]) => (
       // 각 월별 컨테이너 생성 (월의 이름을 key로 설정)
       <div className={style.searchMonth} key={month}>
         {/* 월별 컨테이너 제목 영역 */}
         <div className={style.titleDiv}>
           {/* 월의 이름 표시 */}
           <div className={style.monthTitle}>{month}월</div>
           {/* CustomMainPageH1 컴포넌트는 특정 스타일을 적용하는 역할로 사용 */}
           <CustomMainPageH1 $searchPageYear>{currentYear}</CustomMainPageH1>
         </div>
         {/* 월별로 그룹화된 작업 데이터 순회 (작업별 CustomMainPageRow 컴포넌트 생성) */}
         {works.map((work, index) => (
           // CustomMainPageRow 컴포넌트를 작업 데이터에 맞게 생성
           <CustomMainPageRow
             key={index}
             $page="searchPage"
             // 작업 기간이 하루인 경우에는 단일 날짜를 표시하고, 아닌 경우에는 작업 기간을 표시하는 title 설정
             title={work.startDay === work.endDay ? `${work.startDay}일` : `${work.startDay}일 - ${work.endDay}일`}
             // 작업 제목을 표시
             value={work.workTitle}
           />
         ))}
       </div>
     ))}
   </div>
 );
};

export default SearchPageContainer;
