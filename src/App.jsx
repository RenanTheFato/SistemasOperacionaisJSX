import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import FirstWindow from "./FirstWindow";
import Windows1 from "./Windows1";
import Windows2 from "./Windows2"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstWindow />}/>
        <Route path="/Windows1" element={<Windows1 />}/>
        <Route path="/WIndows2" element={<Windows2 />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
