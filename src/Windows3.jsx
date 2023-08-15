import { useEffect, useState } from "react";
import "./styles/Windows3.css";

function Windows3() {
  return (
    <>
      <div className="system3">
        <ProgramManager />
      </div>
    </>
  );
}

function ProgramManager(){
    const programIcon = "./src/assets/Win3Icons/PROGM004.png"
    return(
        <>
        <div className="programContainer">
            <div className="programHeader">
                <h1 className="programTitle">Program Manager</h1>
                <div className="whiteTarget">
                    <ul className="programMenu">
                        <li><u>F</u>ile</li>
                        <li><u>O</u>ptions</li>
                        <li><u>W</u>indow</li>
                        <li><u>H</u>elp</li>
                    </ul>
                </div>
            </div>
            <div className="accessoriesIcon">
                <img src={programIcon}/><br />
                <span>Accessories</span>
            </div>
        </div>
        </>
    )
}

export default Windows3;
