import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import FirstWindow from "./FirstWindow";
import PageWindows1 from "./PageComponents/Windows1Page";
import PageWindows2 from "./PageComponents/Windows2Page";
import PageWindows3 from "./PageComponents/Windows3Page";
import PageWindowsNT from "./PageComponents/WindowsNTPage";
import PageWindows95 from "./PageComponents/Windows95Page";
import PageWindows98 from "./PageComponents/Windows98Page";
import PageWindows2000 from "./PageComponents/Windows2000Page";
import PageWindowsME from "./PageComponents/WindwosMEPage";
import PageWindowsXP from "./PageComponents/WindowsXPPage";
import PageWindowsVista from "./PageComponents/WindowsVistaPage";
import PageWindows7 from "./PageComponents/Windows7Page";
import PageWindows8 from "./PageComponents/Windows8Page";
import PageWindows10 from "./PageComponents/Windows10Page";
import PageWindows11 from "./PageComponents/Windows11Page";
import PageUnix from "./PageComponents/UnixPage";
import PageLinux from "./PageComponents/LinuxPage";
import PageMac from "./PageComponents/MacPage";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstWindow />}/>
        <Route path="/Windows1" element={<PageWindows1 />}/>
        <Route path="/Windows2" element={<PageWindows2 />}/>
        <Route path="/Windows3" element={<PageWindows3 />}/>
        <Route path="/WindowsNT" element={<PageWindowsNT />}/>
        <Route path="/Windows95" element={<PageWindows95 />}/>
        <Route path="/Windows98" element={<PageWindows98 />}/>
        <Route path="/Windows2000" element={<PageWindows2000 />}/>
        <Route path="/WindowsME" element={<PageWindowsME />}/>
        <Route path="/WindowsXP" element={<PageWindowsXP />}/>
        <Route path="/WindowsVista" element={<PageWindowsVista />}/>
        <Route path="/Windows7" element={<PageWindows7 />}/>
        <Route path="/Windows8" element={<PageWindows8 />}/>
        <Route path="/Windows10" element={<PageWindows10 />}/>
        <Route path="/Windows11" element={<PageWindows11 />}/>
        <Route path="/Unix" element={<PageUnix />}/>
        <Route path="/Linux" element={<PageLinux />}/>
        <Route path="/Mac" element={<PageMac />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
