import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"

function PageLinux() {
  return(
    <>
      <div className="banner Linux">
        <a href="Unix"><img src={arrow} className="arrowBack"/></a>
        <a href="Mac"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Linux</h1>
      </div>
      <div className="osContainer">
        <div className="textContainer1 Linux">
          <p>
            Linux, lançado em 1991, é um grupo de sistemas operacionais que utilizam o núcleo Linux e o shell Bash. É um sistema de <span className="important2">código aberto</span>
            (Open Source), onde os usuários trabalham em conjunto na criação e atualização de sistemas Linux e disponibilizam gratuitamente.
            Algumas das versões mais utilizadas do Linux são: <span className="important2">Ubuntu</span>, <span className="important2">Kali Linux</span> e
            <span className="important2"> Arch Linux</span>.
          </p>
        </div>
      </div>
      <div className="divisionWarn Linux">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Linux">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Ubuntu first">
                <img src="./src/PageComponents/PageImages/ubuntu.jpg"/>
            </div>
            <div class="slide Windows82">
                <img src="./src/PageComponents/PageImages/kali.png"/>
            </div>
            <div class="slide Windows112">
                <img src="./src/PageComponents/PageImages/arch.png"/>
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
export default PageLinux