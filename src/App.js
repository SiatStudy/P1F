import './App.css';
import {Calendar} from "./content/Calendar";

function App() {
    return (
        <div className="mainContainer">
            <Calendar width={1680} mode={"calendar"} />
        </div>
    );
}

export default App;