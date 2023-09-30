import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windowsXP.png"

function PageWindowsXP() {
  return(
    <>
      <div className="banner">
      '<a href="Windows2000"><img src={arrow} className="arrowBack"/></a>
        <a href="WindowsVista"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows XP</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage" src={systemComputer}/>
        <div className="textContainer1">
          <p>
            O Windows XP foi lançado em 2001 com uma grande mudança desde o Windows 95, alterou suavemente o modelo de interface gráfica, 
            aplicando um estilo 3D suave e retirando os tons acinzentados e passando para tons de azul. O nome <span className="important">XP
            </span> significa eXPeriência, na qual transmitia que o sistema proporcionava experiência para os usuários.
            Foi a primeira versão a rodar sem o MS-DOS como base e apresentou melhorias significativas de desempenho e velocidade.            
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider WindowsXP">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide first">
                <img src="./src/PageComponents/PageImages/WindowsXP1.jpg"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/WindowsXP2.jpg"/>
            </div>
            <div class="slide WindowsXP">
                <img src="./src/PageComponents/PageImages/WindowsXP3.webp"/>
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
    <div className="curiosityContainer WindowsXP">
      <div className="curiosityHeader WindowsXP">
      <img className="curiosityLogo WindowsXP" src={curiosityLogo}/>
        <h1 className="curiosityTitle WindowsXP">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="curiosityTextBox WindowsXP">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          O Windows XP já foi considerado a melhor versão do Windows por seu alto desempenho e versatilidade, com uma versão doméstica(Home),
          uma versão profissional, uma focada em mídia(Media Center Edition), uma versão inicial/mais barata e posteriormente uma versão 64 Bits.
        </p>
      </div>
      <div className="navBar WindowsXP"></div>
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

export default PageWindowsXP