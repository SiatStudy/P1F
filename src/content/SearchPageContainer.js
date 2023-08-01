import React, { useState, useEffect } from 'react';
import style from './SearchPageContainer.module.css'
import CustomMainPageH1 from '../component/CustomMainPageH1';
import CustomMainPageRow from '../component/CustomManinPageRow';

const SearchPageContainer = () => {
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
    }
  ]);

  const correntMonth = 5;

  // 월별 작업 데이터 정렬 및 필터링하는 함수
  const getFilteredData = () => {
    // 현재 월 범위 계산
    const minMonth = correntMonth - 1;
    const maxMonth = correntMonth + 1;

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
    console.log(groupedData);

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
      {Object.entries(filteredData).map(([month, works]) => (
        <div className={style.searchMonth} key={month}>
          <div className={style.titleDiv}>
            <div className={style.monthTitle}>{month}월</div>
            <CustomMainPageH1 $searchPageYear>{2021}</CustomMainPageH1>
          </div>
          {works.map((work, index) => (
            <CustomMainPageRow
              key={index}
              $page="searchPage"
              title={work.startDay === work.endDay ? `${work.startDay}일` : `${work.startDay}일 - ${work.endDay}일`}
              value={work.workTitle}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchPageContainer;
