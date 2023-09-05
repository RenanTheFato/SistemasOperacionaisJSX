import { useEffect, useState, useRef } from "react";
import Windows1 from "../Windows1";
import Windows98 from "../Windows98";
import "./Page.css"

function PageWindows1() {
  return(
    <>
      <div className="banner">
        <h1 className="osName">Windows 1</h1>
      </div>
      <div className="osContainer">
        <div className="textContainer1">
          <p>O Windows 1 foi a primeira versão oficial a ser lançada pela Microsoft em 1985, sendo o primeiro a possuir uma <span className="important">
            interface gráfica, sendo controlada pelo usuário através de uma forma visual e não mais por tetxos em um promp de comando.</span></p>
        </div>
        <div className="textContainer2">
          <h1>Características</h1>
        </div>
      </div>
    <div className="divisionWarn">
      <h1>Exibição do Sistema</h1>
    </div>
    <Windows98/>
    </>
    )
}

export default PageWindows1