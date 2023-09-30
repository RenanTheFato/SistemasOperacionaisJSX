import { useEffect, useState, useRef } from "react";
import Windows3 from "../Windows3"
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows1logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"

function PageWindowsNT() {
  return(
    <>
      <div className="banner">
        <a href="Windows3"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows95"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows NT</h1>
      </div>
      <div className="osContainer">
        <div className="textContainer1">
          <p>
            O Windows NT foi um sistema operacional lançado com o objetivo de fornecer mais segurança e funcionabilidades para empresas e lojas,
            tendo foco nas suas ferramentas para o meio coorporativo, com o lançamento da função de trabalhar em um 
            <span className="important"> servidor de arquivos</span> podendo alterar funções específicas sem alterar o funcionamento do resto do sistema.
            Para rodar as versões do Windows NT eram necessários uma CPU 80836 (32 Bits), 12MB de memória ram e 75MB de espaço em disco rígido.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
        <div className="textContainer2">
          <p>
            O Windows NT recebeu as seguintes versões:<br/><br/>
            <span className="important">3.1</span>: Lançada em 1993 tinha base no Windows 3  e foi a primeira versão do Windows NT.<br/>
            <span className="important">3.5</span>: Era semelhante a versão 3.1 porém recebeu algumas melhorias.<br/>
            <span className="important">4.0</span>: Lançada em 1996 tinha interface semelhante a do Windows 95. Introduziu mais serviços de gestão como o Web Server e o  Microsoft Message Queuing.
          </p>
        </div>
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
                <img src="./src/PageComponents/PageImages/Winnt31.webp"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Winnt35.webp"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Winnt40.webp"/>
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
    <div className="curiosityContainer Windows98">
      <div className="curiosityHeader Windows98">
        <h1 className="curiosityTitle Windows1">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox Windows98">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          O Windows NT está presente até os dias de hoje como base para a criação dos sistemas operacionais, principalmente em versões
          corporativas, servidores e em workstations. Atualmente se encontra na versão 10.0, com suporte para Windows 10 e Windows 11.
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

export default PageWindowsNT