
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';
import PowerBar from "./PowerBar";
import Coconuts from "./Coconuts";
import FrenchToast from "./FrenchToast";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/powerbar" element={<PowerBar />} />
          <Route exact path="/coconuts" element={<Coconuts />} />
          <Route exact path="/frenchtoast" element={<FrenchToast />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
