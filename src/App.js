import './App.css';
import TestContainer1 from './content/TestContainer1';
import TestContainer2 from './content/TestContainer2';

function App() {
  return (
    <div className="mainContainer">
      {/* 테스트 컨테이너1 */}
      <TestContainer1></TestContainer1>
      {/* 테스트 컨테이너2 */}
      {/* <TestContainer2></TestContainer2> */}
    </div>
  );
}

export default App;
