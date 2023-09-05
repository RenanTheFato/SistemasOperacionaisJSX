import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import FirstWindow from "./FirstWindow";
import PageWindows1 from "./PageComponents/Windows1Page";
import Windows1 from "./Windows1";
import Windows2 from "./Windows2"
import Windows3 from "./Windows3";
import Windows98 from "./Windows98";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstWindow />}/>
        <Route path="/Windows1" element={<PageWindows1 />}/>
        <Route path="/WIndows2" element={<Windows2 />}/>
        <Route path="/WIndows3" element={<Windows3 />}/>
        <Route path="/WIndows98" element={<Windows98 />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
