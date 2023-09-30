import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsmelogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windowsMe.png"

function PageWindowsME() {
  return(
    <>
      <div className="banner">
        <a href="Windows98"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows2000"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows ME</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage WindowsMe" src={systemComputer}/>
        <div className="textContainer1">
          <p>
            O Windows ME é considerado o <span className="important"> pior windows já lançado</span>, repleto de erros, desempenho ruim e fraco
            decorrente de um lançamento apressado e mal feito. Foi o último sistema que rodava com o MS-DOS como base, o foco do sistema era a
            experiência multimídia com o lançamento de softwares que permitiam visualizar fotos, editar e criar vídeos e oferecia suporte a 
            câmeras fotográficas. Também intoduziu a criação de redes domésticas e a versão 5.5 do Internet Explorer.
            Nessa versão também foi introduzido o <span className="important"> ponto de restauração</span>.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Windows2000">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide first">
                <img src="./src/PageComponents/PageImages/WindowsME1.webp"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/WindowsME2.jpg"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/WindowsME3.jpg"/>
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
    const curiosityLogo = "./src/assets/Win98Icons/duvida.png"
  return(
    <>
    <div className="curiosityContainer WindowsME">
      <div className="curiosityHeader WindowsME">
      <img className="curiosityLogo Windows98" src={curiosityLogo}/>
        <h1 className="curiosityTitle Windows98">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox WindowsME">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          
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

export default PageWindowsME