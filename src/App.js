// import logo from './logo.svg';
import './App.css';
import MyPageContainer from './content/MyPageContainer';
import SearchPageContainer from './content/SearchPageContainer';
import Dday from './page/Dday';

function App() {
  return (
    <div className="mainContainer">
      {/* <MyPageContainer></MyPageContainer> */}
      <SearchPageContainer></SearchPageContainer>
      {/* <Dday></Dday> */}
    </div>
  );
}

export default App;
