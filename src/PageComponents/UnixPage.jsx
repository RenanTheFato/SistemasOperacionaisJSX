import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/unix.png"

function PageUnix() {
  return(
    <>
      <div className="banner Unix">
        <a href="Windows11"><img src={arrow} className="arrowBack"/></a>
        <a href="Linux"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Unix</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage Unix" src={systemComputer}/>
        <div className="textContainer1 Unix">
          <p>
            Unix foi o "pai" dos sistemas operacionais, lançada a sua primeira versão em 1969, foi a base para todos os outros sistemas.
            Não possuia interface gráfica, porém, podia-se obter através de pacotes externos. O sistema era multitarefa e multiusuário, onde 
            utilizava-se a <span className="important">CLI</span>, também apresentava uma grande segurança e estabilidade, na qual permitia aos 
            usuários recursos avançados de controle.
          </p>
        </div>
      </div>
      <div className="divisionWarn Unix">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Unix">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Unix first">
                <img src="./src/PageComponents/PageImages/unix1.png"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/unix2.png"/>
            </div>
            <div class="slide Unix2">
                <img src="./src/PageComponents/PageImages/unix3.jpg"/>
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
export default PageUnix