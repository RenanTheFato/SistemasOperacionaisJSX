import { useEffect, useState, useRef } from "react";
import Windows3 from "../Windows3"
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows1logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows3.png"
function PageWindows3() {
  return(
    <>
      <div className="banner">
        <a href="Windows2"><img src={arrow} className="arrowBack"/></a>
        <a href="WindowsNT"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 3</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage Windows3" src={systemComputer}/>
        <div className="textContainer1 Windows3">
          <p>
            O Windows 3 foi o primeiro grande sucesso da Microsoft com sistemas operacionais, lançado em 1990, Windows 3 foi completamente 
            reformulado e melhorado em relação aos seus antecessores. Apresentava uma nova interface mais intuitiva, melhorou o sistema de 
            gerenciamento de memória, o sistema multitarefa e aplicou o sistema gráfico <spas className="important">16 Bits</spas>
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
    <div className="divisionWarn">
      <h1>Representação do Sistema</h1>
    </div>
    <Windows3/>
    </>
    )
}

function CuriosityContainer(){
  return(
    <>
    <div className="curiosityContainer">
      <div className="curiosityHeader Windows3">
        <h1 className="curiosityTitle Windows1">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox Windows1">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          O Windows 3 foi um grande avanço para os sistemas operacionais, recebendo constantes atualizações melhorando suas funcionabilidades
          em um período de poucos anos, sendo 5 versões oficias: 3.0 lançado em 1990, 3.1  lançado em 1992, Workgroups 3.1  lançado em 1992,
          3.11  lançado em 1993 e Workgroups 3.11  lançado em 1993. 
        </p>
      </div>
    </div>
    </>
  )
}

function ShowHideCuriosity() {
  const targetHideCuriosity = document.querySelector(".curiosityContainer")
  if (targetHideCuriosity.style.display === 'block') {
    targetHideCuriosity.style.display = 'none'
  } else {
    targetHideCuriosity.style.display = 'block'
  }
}

export default PageWindows3