// import logo from './logo.svg';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Dday from './page/Dday';
import MyPage from './page/MyPage';
import SearchPage from './page/SearchPage';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CalendarP from './page/CalendarP';
import GraphP from './page/GraphP';
import Listday from './page/Listday';
import Dday from './page/Dday';

function App() {
  return (
    <div>
      <Routes>
        
        
        <Route path={"/mypage"} element={<MyPage />}></Route>
        <Route path={"/search/:word"} element={<SearchPage />}></Route>
        <Route path={"*"} element={<h1>잘못된 페이지 요청입니다.</h1>}></Route>
      </Routes>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listday />} />
          <Route path="/Listday" element={<Listday />} />
          <Route path="/CalendarP" element={<CalendarP />} />
          <Route path="/Dday" element={<Dday />} />
          <Route path="/GraphP" element={<GraphP />} />
        </Routes>         
      </BrowserRouter>
    </div>
  );
}

export default App;