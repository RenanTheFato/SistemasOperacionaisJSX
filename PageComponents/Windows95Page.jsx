import { useEffect, useState, useRef } from "react";
import Windows98 from "../Windows98"
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows1logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows95.png"

function PageWindows95() {
  return(
    <>
      <div className="banner">
        <a href="WindowsNT"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows98"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 95</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage Windows95" src={systemComputer}/>
        <div className="textContainer1">
          <p>
            O Windows 95 foi um sistema que marcou a história da tecnologia, a interface gráfica foi completamente reformulada, 
            adicionando uma barra de tarefas, um menu iniciar com programas em fácil acesso.<br/>
            Nesta versão o Windows conseguia executar sem a necessidade do prompt de comando(MS-DOS), ofereceu suporte a arquivos 
            <span className="important"> FAT-16</span> e a primeira versão a oferecer suporte a <span className="important"> Internet </span>
            com os protocolos TCP/IP e com o Internet Explorer 3.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider WindowsNT">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide first">
                <img src="./src/PageComponents/PageImages/Windows951.jpg"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages//Windows952.png"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Windows953.webp"/>
            </div>
        </div>
        <div class="manual-navigation">
            <label for="radio1" class="manual-btn"></label>
            <label for="radio2" class="manual-btn"></label>
            <label for="radio3" class="manual-btn"></label>
        </div>
    </div>
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

export default PageWindows95