import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windowsVista.png"

function PageWindowsVista() {
  return(
    <>
      <div className="banner">
        <a href="WindowsXP"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows7"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows Vista</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage WindowsVista" src={systemComputer}/>
        <div className="textContainer1 WindowsVista">
          <p>
            Windows Vista foi lançado em 2007 e tinha o foco de se ajustar conforme o usuário desejar, a interface gráfica foi totalmente ajustada
            para um modelo 3D com transparência, chamada <span className="important">Aero</span>, buscando ser mais interativo do que as versões 
            anteriores. Porém o sistema era muito pesado e mal otimizado para os computadores da época, exigindo requisitos considerados top de linha
            e mesmo assim não conseguiam rodar com um bom desempenho.     
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider WindowsVista">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide WindowsVista first">
                <img src="./src/PageComponents/PageImages/WindowsVista1.jpg"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/WindowsVista2.webp"/>
            </div>
            <div class="slide WindowsVista2">
                <img src="./src/PageComponents/PageImages/WindowsVista3.png"/>
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
    const curiosityLogo = "./src/PageComponents/PageImages/winxpcuriosity.png"
  return(
    <>
    <div className="curiosityContainer WindowsVista">
      <div className="curiosityHeader WindowsVista">
      <img className="curiosityLogo WindowsXP" src={curiosityLogo}/>
        <h1 className="curiosityTitle WindowsXP">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox WindowsVista">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          Para Windows Vista foi lançado um sistema de alternância 3D de janelas chamado Flip 3D, permitindo a rápida navegação entre janelas de
          programas que estavam sendo executados, e era ativado quando pressionado a tecla "Windows" + "Tab".
        </p>
      </div>
      <div className="navBar WindowsVista"></div>
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

export default PageWindowsVista