import React, { useState, useEffect } from 'react';
import style from './SearchPageContainer.module.css'
import CustomMainPageH1 from '../component/CustomMainPageH1';
import CustomMainPageRow from '../component/CustomManinPageRow';

const SearchPageContainer = () => {
  const [currentMonth, setCurrentMonth] = useState(5);
  const [searchDataArr, setSearchDataArr] = useState([
    {
      month: 4,
      startDay: 21,
      endDay: 25,
      workTitle: "해야할 일1",
    },
    {
      month: 6,
      startDay: 1,
      endDay: 15,
      workTitle: "해야할 일3",
    },
    {
      month: 5,
      startDay: 23,
      endDay: 26,
      workTitle: "해야할 일5",
    },
    {
      month: 4,
      startDay: 10,
      endDay: 30,
      workTitle: "해야할 일7",
    },
    {
      month: 5,
      startDay: 10,
      endDay: 30,
      workTitle: "해야할 일7",
    },
    {
      month: 6,
      startDay: 10,
      endDay: 30,
      workTitle: "해야할 일7",
    },
    {
      month: 4,
      startDay: 10,
      endDay: 30,
      workTitle: "해야할 일7",
    },
    {
      month: 5,
      startDay: 10,
      endDay: 30,
      workTitle: "해야할 일7",
    },
    {
      month: 6,
      startDay: 10,
      endDay: 30,
      workTitle: "해야할 일7",
    }
  ]);

  // 월별 작업 데이터 정렬 및 필터링하는 함수
  const getFilteredData = () => {
    // 현재 월 범위 계산
    let minMonth = currentMonth - 1;
    let maxMonth = currentMonth + 1;

    // 데이터 정렬 (낮은 순으로 정렬 -> 같은 월일 경우 startDay로 정렬 -> 같은 월, startDay일 경우 endDay로 정렬)
    const sortedData = searchDataArr.sort((a, b) => {
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
      if (parseInt(month, 10) >= minMonth && parseInt(month, 10) <= maxMonth) {
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
            <CustomMainPageH1 $searchPageYear>{2021}</CustomMainPageH1>
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
