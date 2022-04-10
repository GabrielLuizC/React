import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Logon from "./pages/Logon";

import './global.css';

function App(){
  return(
    <Router>
        <Routes>
            <Route path="/" element={<Logon/>} />
        </Routes>
    </Router>
  );
}

export default App;