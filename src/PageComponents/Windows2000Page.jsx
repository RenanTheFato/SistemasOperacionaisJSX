import { useEffect, useState, useRef } from "react";
import Windows98 from "../Windows98"
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows3logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows2000.png"

function PageWindows2000() {
  return(
    <>
      <div className="banner">
        <a href="WindowsME"><img src={arrow} className="arrowBack"/></a>
        <a href="WindowsXP"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 2000</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage Windows3" src={systemComputer}/>
        <div className="textContainer1 Windows1">
          <p>
            O Windows 2000 não apresentou tantas mudanças em relação ao Windows 98, a interface gráfica continuou praticamente a mesma, foi
            adicionado atalhos na barra de nevegação, facilitando a inicialização de aplicações, podendo ser definida pelo usuário. Adicionaram mais 
            opções de acessibilidade e suporte. Também incluiram um sistema de arquivos chamado <span className="important"> NTFS 3.0 </span>, que
            prometia mais segurança aos arquivos com criptografia.
          </p>
        </div>
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
                <img src="./src/PageComponents/PageImages/Windows20001.webp"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Windows20002.png"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Windows20003.jpg"/>
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

export default PageWindows2000