import { useEffect, useState, useRef } from "react";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windowsvistalogo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"
const systemComputer = "./src/PageComponents/PageComputer/windows8.png"

function PageWindows8() {
  return(
    <>
      <div className="banner">
        <a href="Windows7"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows10"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 8 e 8.1</h1>
      </div>
      <div className="osContainer">
      <img className="computerImage WindowsMe" src={systemComputer}/>
        <div className="textContainer1">
            <button className="changeContainer" onClick={ChangeContainer2}>Teste</button>
          <p>
            O Windows 8 foi lançado em 2012 e tinha como objetivo ultrapassar o antecessor Windows 7, porém foi um completo fracasso. Uma das
            alterações foi a <span className="important">remoção</span> do menu iniciar, o que não agradou os usuários. O sistema de busca ficou ineficiente, onde o usuário queria buscar algo que estava na sua máquina local
            e exibia resultados da internet. Neste sistema também foi implementado o Touch Screen, que buscava melhorar a navegação do sistema,
            foi muito bem implementado nas versões portáteis, porém nas versões de desktop foi ineficiente.
          </p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <div className="textContainer3">
        <button className="changeContainer" onClick={ChangeContainer}>Teste</button>
          <p>
            Windows 8.1 foi uma versão que focou em melhorar e corrigir as funções que não haviam sido muito bem recebidas no Windows 8.
            Retornaram com o menu iniciar e adicionaram mais funções de acessibilidade e usabilidade, tornando essa versão do Windows "usável"
            em relação a sua versão anterior.
          </p>
        </div>
        <CuriosityContainer/>
      </div>
      <div className="divisionWarn">
      <h1>Imagens do Sistema</h1>
    </div>
    <div class="slider Windows8">
        <div class="slides">
            <input type="radio" name="radio-btn" id="radio1"/>
            <input type="radio" name="radio-btn" id="radio2"/>
            <input type="radio" name="radio-btn" id="radio3"/>
            <div class="slide Windows8 first">
                <img src="./src/PageComponents/PageImages/Windows81.jpg"/>
            </div>
            <div class="slide Windows82">
                <img src="./src/PageComponents/PageImages/Windows82.jpg"/>
            </div>
            <div class="slide Windows72">
                <img src="./src/PageComponents/PageImages/Windows83.webp"/>
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

function ChangeContainer() {
    const targetHideText1 = document.querySelector(".textContainer1")
    const targetHideText2 = document.querySelector(".textContainer3")

    targetHideText1.style.display = 'block'
    targetHideText2.style.display = 'none'
  }

function ChangeContainer2() {
    const targetHideText1 = document.querySelector(".textContainer1")
    const targetHideText2 = document.querySelector(".textContainer3")

    targetHideText1.style.display = 'none'
    targetHideText2.style.display = 'block'
}

export default PageWindows8