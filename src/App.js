import './App.css';
import MypageContainer from './content/MypageContainer';
import FindIdPage from './page/FindIdPage';
import FindPwPage from './page/FindPwPage';
import IdCheckPage from './page/IdCheckPage';
import LoginPage from './page/LoginPage';
import PwChangePage from './page/PwChangePage';

function App() {
  return (
    <div className="mainContainer">
      {/* <LoginPage></LoginPage> */}
      <FindIdPage></FindIdPage>
      {/* <FindPwPage></FindPwPage> */}
      {/* <PwChangePage></PwChangePage> */}
      {/* <IdCheckPage></IdCheckPage> */}
      <MypageContainer></MypageContainer>
    </div>
  );
}

export default App;
