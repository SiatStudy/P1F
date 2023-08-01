import React, { useState } from 'react';
import style from './SearchPageContainer.module.css'
import CustomMainPageH1 from '../component/CustomMainPageH1';
import CustomMainPageRow from '../component/CustomManinPageRow';

const SearchPageContainer = () => {
const [searchDataObj, setSearchDateObj] = useState({
  firstMonth: {
    firstWork:{
      startDay : 1,
      endDay : 2,
      workTitle : "해야할 일1"
    },
    secondWork:{
      startDay : 10,
      endDay : 10,
      workTitle : "해야할 일2"
    },
    thirdWork:{
      startDay : 21,
      endDay : 30,
      workTitle : "해야할 일3"
    }
  },
  secondMonth: {
    firstWork:{
      startDay : 3,
      endDay : 4,
      workTitle : "해야할 일4"
    },
    secondWork:{
      startDay : 7,
      endDay : 11,
      workTitle : "해야할 일5"
    },
    thirdWork:{
      startDay : 19,
      endDay : 19,
      workTitle : "해야할 일6"
    }
  },
  thirdMonth: {
    firstWork:{
      startDay : 8,
      endDay : 8,
      workTitle : "해야할 일7"
    },
    secondWork:{
      startDay : 9,
      endDay : 17,
      workTitle : "해야할 일8"
    },
    thirdWork:{
      startDay : 21,
      endDay : 21,
      workTitle : "해야할 일9"
    }
  }
});


  return (
    <div className={style.mainContainer}>
      <div className={style.searchMonth}>
        <div className={style.titleDiv}>
          <div className={style.monthTitle}>06월</div>
          {/* CustomH1에 스타일을 주고 썻을 시 확대하면 글자가 겹쳐서 div로 감쌈 */}
          <CustomMainPageH1 $searchPageYear >2021</CustomMainPageH1>
        </div>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
      </div>
      <div className={style.searchMonth}>
        <div className={style.titleDiv}>
          <div className={style.monthTitle}>07월</div>
          {/* CustomH1에 스타일을 주고 썻을 시 확대하면 글자가 겹쳐서 div로 감쌈 */}
          <CustomMainPageH1 $searchPageYear >2021</CustomMainPageH1>
        </div>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
      </div>
      <div className={style.searchMonth}>
        <div className={style.titleDiv}>
          <div className={style.monthTitle}>08월</div>
          {/* CustomH1에 스타일을 주고 썻을 시 확대하면 글자가 겹쳐서 div로 감쌈 */}
          <CustomMainPageH1 $searchPageYear >2021</CustomMainPageH1>
        </div>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
        <CustomMainPageRow $page="searchPage" title="17일 - 18일" value="컴포넌트 제작"></CustomMainPageRow>
      </div>
    </div>
  );
};

export default SearchPageContainer;