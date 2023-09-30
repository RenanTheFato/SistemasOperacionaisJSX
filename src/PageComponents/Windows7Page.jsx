import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows7.png"

function PageWindows7() {
  return(
    <>
      <div className="banner">
        <a href="WindowsVista"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows8"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 7</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage WindowsMe" src={systemComputer}/>
        <div className="textContainer1">
          <p>
            O Windows 7 foi lançado em 2009 e tinha como foco ser mais prático, corrigir e melhorar o desempenho em relação ao antecessor, 
            a interface passou a ser a <span className="important">Frutiger Aero</span> que buscou um modelo 3D minimalista, sem muitos 
            detalhes para melhorar o desempenho porém mantendo uma elegância. Houve também uma mudança na barra de tarefas que passou a mostrar
            uma miniatura do programa que estava aberto e o sistema de busca de arquivos que ficou mais preciso.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Windows7">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Windows7 first">
                <img src="./src/PageComponents/PageImages/Windows71.jpg"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Windows72.png"/>
            </div>
            <div class="slide Windows72">
                <img src="./src/PageComponents/PageImages/Windows73.png"/>
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
          No Windows 7 foi lançada a função "Aero Shake", na qual se o usuário chacoalhar o mouse sobre uma janela ela minimizava, 
          sendo um recurso que proporciona agilidade mas que é pouco conhecido, e ainda está presente até os sistemas atuais.
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

export default PageWindows7