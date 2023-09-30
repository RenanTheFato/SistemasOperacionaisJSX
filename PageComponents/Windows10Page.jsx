import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows10.png"

function PageWindows10() {
  return(
    <>
      <div className="banner">
        <a href="Windows8"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows11"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 10</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage Windows10" src={systemComputer}/>
        <div className="textContainer1 WindowsVista">
          <p>
            O Windows 10 é um marco na evolução dos sistemas operacionais, lançado em 2015, o sistema melhorou todas as suas funcionalidades,
            apresentou uma interface mais responsiva e minimalista, retirando o aspecto 3D das versões anteriores. Adicionou a possibilidade de
            ter diversas áreas de trabalho em um mesmo computador, adicionou uma assistente virtual(Cortana) facilitando algumas tarefas.
            Foram lançadas <span className="important">7 Versões </span> para o Windows 10.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Windows10">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Windows82 first">
                <img src="./src/PageComponents/PageImages/Windows101.jpg"/>
            </div>
            <div class="slide Windows82">
                <img src="./src/PageComponents/PageImages/Windows102.jpg"/>
            </div>
            <div class="slide Windows10">
                <img src="./src/PageComponents/PageImages/Windows103.avif"/>
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
    <div className="curiosityContainer Windows7">
      <div className="curiosityHeader Windows7">
      <img className="curiosityLogo WindowsXP" src={curiosityLogo}/>
        <h1 className="curiosityTitle WindowsXP">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox Windows7">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          O Windows 10 é até hoje o sistema mais popular e mais utilizado e também considerado o 
          mais completo.
        </p>
      </div>
      <div className="navBar Windows7"></div>
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
export default PageWindows10