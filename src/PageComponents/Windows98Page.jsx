import { useEffect, useState, useRef } from "react";
import Windows98 from "../Windows98"
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows3logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows98.png"

function PageWindows98() {
  return(
    <>
      <div className="banner">
        <a href="Windows95"><img src={arrow} className="arrowBack"/></a>
        <a href="WindowsME"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 98</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage" src={systemComputer}/>
        <div className="textContainer1 Windows1">
          <p>
            O Windows 98 aprimorou as funcionalidades de seu antecessor, manteve a mesma base de interface gráfica, e integrou completamente a
            internet ao sistema operacional. Aprimorou o Internet Explorer para a vesão 4, prometendo mais agilidade, introduziu o sistema de
            arquivos <span className="important"> FAT-32 </span> e o suporte ao <span className="important"> USB</span>.<br/>
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Representação do Sistema</h1>
    </div>
    <Windows98/>
    </>
    )
}

function CuriosityContainer(){
    const curiosityLogo = "./src/assets/Win98Icons/duvida.png"
  return(
    <>
    <div className="curiosityContainer Windows98">
      <div className="curiosityHeader Windows98">
      <img className="curiosityLogo Windows98" src={curiosityLogo}/>
        <h1 className="curiosityTitle Windows98">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox Windows98">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          A primeira versão do Windows 98 chegou com muitos bugs, então foi lançada uma versão chamada Windows 98 SE. Lançada em 1999 e esta 
          versão visava corrigir estas falhas e resolver os problemas de instabilidade do Windows 98. Essa versão é recomendada até os 
          dias atuais para usuários que possuem uma máquina mais antiga ou fraca.
        </p>
      </div>
      <div className="navBar Windows98"></div>
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

export default PageWindows98