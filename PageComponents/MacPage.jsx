import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"

function PageMac() {
  return(
    <>
      <div className="banner Mac">
        <a href="Unix"><img src={arrow} className="arrowBack"/></a>
        <a href="/"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Mac-OS</h1>
      </div>
      <div className="osContainer">
        <div className="textContainer1 Mac">
          <p>
            Mac-OS teve sua primeira versão lançada em 2001, sendo o sistema operacional da Apple e no qual funciona apenas em dispositivos
            fornecidos pela Apple, não sendo possível a utilização em outras plataformas. O sistema apresenta uma interface gráfica elegante,
            com diversos recursos de animações e transições, conta com uma assistente virtual(Siri) e possui um sistema Cross Plataform, onde é
            possível enviar os arquivos de um computador para um dispositivo mobile, dando continuidade no trabalho. Atualmente o Mac-OS encontra-se
            na versão 14.
          </p>
        </div>
      </div>
      <div className="divisionWarn Mac">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Mac">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Ubuntu first">
                <img src="./src/PageComponents/PageImages/Mac1.webp"/>
            </div>
            <div class="slide">
                <img src="./src/PageComponents/PageImages/Mac2.webp"/>
            </div>
            <div class="slide Mac">
                <img src="./src/PageComponents/PageImages/Mac3.jpg"/>
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

export default PageMac