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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listday />} />
          <Route path="/listday" element={<Listday />} />
          <Route path="/calendarp" element={<CalendarP />} />
          <Route path="/dday" element={<Dday />} />
          <Route path="/graphp" element={<GraphP />} />
        </Routes>         
      </BrowserRouter>
    </div>
  );
}

export default App;