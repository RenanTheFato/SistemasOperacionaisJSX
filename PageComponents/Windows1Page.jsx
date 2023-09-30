import { useEffect, useState, useRef } from "react";
import Windows1 from "../Windows1";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows1logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows1.jpg"
function PageWindows1() {
  return(
    <>
      <div className="banner">
        <a href="/"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows2"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 1</h1>
      </div>
      <div className="osContainer">
        <img className="computerImage" src={systemComputer}/>
        <div className="textContainer1 Windows1">
        <p>O Windows 1 foi a primeira versão oficial a ser lançada pela Microsoft em 1985, sendo o primeiro a possuir uma 
            interface gráfica, sendo controlada pelo usuário através de uma forma visual e não mais por tetxos em um promp de comando. 
            A versão do sistema suportava 16 bits e eram necessários <span className="important">256 kb de memória ram,</span> um disco rígido para armazenamento e a versão 2.0 ou superior do MS-DOS.</p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
    <div className="divisionWarn">
      <h1>Representação do Sistema</h1>
    </div>
    <Windows1/>
    </>
    )
}

function CuriosityContainer(){
  return(
    <>
    <div className="curiosityContainer">
      <div className="curiosityHeader Windows1">
        <h1 className="curiosityTitle Windows1">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="yellowTarget"><br/></div>
      <div className="curiosityTextBox Windows1">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          A proposta do windows era ser um sistema operacional de interface bidimensional para facilitar o uso do sistema operacional de 
          computadores IBM da época. Então o nome "Windows" foi escolhido devido à característica central do sistema operacional: a criação 
          de uma interface gráfica que exibia múltiplas "janelas" na tela do computador.
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

export default PageWindows1