// import logo from './logo.svg';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Dday from './page/Dday';
import MyPage from './page/MyPage';
import SearchPage from './page/SearchPage';

function App() {
  return (
    <div>
      <Routes>
        
        
        <Route path={"/mypage"} element={<MyPage />}></Route>
        <Route path={"/search/:word"} element={<SearchPage />}></Route>
        <Route path={"*"} element={<h1>잘못된 페이지 요청입니다.</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;