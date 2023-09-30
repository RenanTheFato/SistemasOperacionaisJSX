import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows11.png"

function PageWindows11() {
  return(
    <>
      <div className="banner">
        <a href="Windows10"><img src={arrow} className="arrowBack"/></a>
        <a href="Unix"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 11</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage" src={systemComputer}/>
        <div className="textContainer1 Windows1">
          <p>
            O Windows 11 é a versão mais recente da família windows, lançado em 2021, apresentou um novo design mais minimalista e ágil,
            proporcionando mais velocidade em achar programas e arquivos, estando mais centrados. Pórem ainda não superou o Windows 10 decorrente
            de seu lançamento recente e também por causa de muitas falhas, nas quais não estão presentes na versão anterior.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Windows11">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Windows11 first">
                <img src="./src/PageComponents/PageImages/Windows111.webp"/>
            </div>
            <div class="slide Windows82">
                <img src="./src/PageComponents/PageImages/Windows112.webp"/>
            </div>
            <div class="slide Windows112">
                <img src="./src/PageComponents/PageImages/Windows113.jpg"/>
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
export default PageWindows11