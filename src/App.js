// import './App.css';
import {Route, Routes} from 'react-router-dom';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import FindIdPage from './page/FindIdPage';
import FindPWPage from './page/FindPWPage';
// import FindIdResult from "./page/FindIdResult";
// import FindPWResult from "./page/FindPWResult";
// import EmailVerification from "./page/EmailVerification";

function App() {

  return (
    <div>
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <FindIDPWPage /> */}
      {/* <FindIdResult /> */}
      {/* <FindPWResult /> */}
      {/* <EmailVerification /> */}
      <Routes>
        <Route path={"/"} element={<LoginPage />}></Route>
        <Route path={"/SignUpPage"} element={<SignUpPage />}></Route>
        <Route path={"/FindIdPage"} element={<FindIdPage />}></Route>
        <Route path={"/FindPWPage"} element={<FindPWPage />}></Route>
        <Route path={'*'} element={<h1>잘못된 페이지 호출입니다.</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
