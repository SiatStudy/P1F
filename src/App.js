import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dday from './page/Dday';
import MyPage from './page/MyPage';
import SearchPage from './page/SearchPage';
import CalendarP from './page/CalendarP';
import GraphP from './page/GraphP';
import Listday from './page/Listday';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import FindIdPage from './page/FindIdPage';
import FindPWPage from './page/FindPWPage';
import FindIdResult from "./page/FindIdResult";
import FindPWResult from "./page/FindPWResult";

function App() {
  return (
    <div>
      <Routes>
       <Route path={"/loginpage"} element={<LoginPage />}></Route>
        <Route path={"/signuppage"} element={<SignUpPage />}></Route>
        <Route path={"/findidpage"} element={<FindIdPage />}></Route>
        <Route path={"/findpwpage"} element={<FindPWPage />}></Route>
        <Route path={"/findidresult"} element={<FindIdResult />}></Route>
        <Route path={"/findpwresult"} element={<FindPWResult />}></Route>
        <Route path={'*'} element={<h1>잘못된 페이지 호출입니다.</h1>}></Route>
        <Route path={"/"} element={<Listday />} />
        <Route path={"/listday"} element={<Listday />} />
        <Route path={"/calendarP"} element={<CalendarP />} />
        <Route path={"/dday"} element={<Dday />} />
        <Route path="/graphp" element={<GraphP />} />
        <Route path={"/mypage"} element={<MyPage />}></Route>
        <Route path={"/search/:word"} element={<SearchPage />}></Route>
        <Route path={"*"} element={<h1>잘못된 페이지 요청입니다.</h1>}></Route>
      </Routes>
    </div>
    )};

export default App;