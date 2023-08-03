// import logo from './logo.svg';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import MyPageContainer from './content/MyPageContainer';
import SearchPageContainer from './content/SearchPageContainer';
import Dday from './page/Dday';
import MyPage from './page/MyPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Dday />}></Route>
        {/* 합칠때 주소를 '/page/dday'로 수정 필요 */}
        <Route path={"/page/mypage"} element={<MyPage />}></Route>
        <Route path={"/page/search"} element={<SearchPageContainer />}></Route>
        <Route path={"*"} element={<h1>잘못된 페이지 요청입니다.</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;