import { useEffect, useState, useRef } from "react";
import Windows2 from "../Windows2";
import "./Page.css"

const systemLogo = "./src/assets/Logos/windows1logo.png"
const arrow = "./src/PageComponents/PageImages/arrow.png"

function PageWindows2() {
  return(
    <>
      <div className="banner">
        <a href="Windows1"><img src={arrow} className="arrowBack"/></a>
        <a href="Windows3"><img src={arrow} className="arrowForward"/></a>
        <h1 className="osName">Windows 2 e 2.11</h1>
      </div>
      <div className="osContainer">
        <div className="textContainer1 Windows2">
          <p>O Windows 2, lançado em 1987, seguia a mesma linha de sua primeira versão, porém agora com um recurso muito impotante, 
            a <span className='important'>sopreposição de janelas, </span>as opcões de maximizar e minimizar uma janlea, representação com 
            ícones e suporte ao padrão VGA de 16 cores.<br/>Eram necessários <span className='important'>512KB</span> de memória ram e 
            <span className='important'> 720KB</span> de armazenamento em 9 disquetes e uma CPU 8080 para
            fazer o sistema rodar.</p>
            <button className="curiosityHandle" onClick={ShowHideCuriosity}></button>
        </div>
        <CuriosityContainer/>
        <div className="textContainer2 Windows2">
          <p>Já o Windows 2.11 foi uma versão posterior ao Windows 2, lançada em 1989, melhorando o gerenciamento da memória e suportando 
            <span className='important'> 640KB</span> de ram.</p>
        </div>
      </div>
    <div className="divisionWarn">
      <h1>Representação do Sistema</h1>
    </div>
    <Windows2/>
    </>
    )
}

function CuriosityContainer(){
  return(
    <>
    <div className="curiosityContainer">
      <div className="curiosityHeader Windows1">
        <h1 className="curiosityTitle Windows1">Curiosidade</h1>
        <button className="closeCuriosity" onClick={ShowHideCuriosity}>X</button>
      </div>
      <div className="aquaTarget"><br/></div>
      <div className="curiosityTextBox Windows1">
      <img className="curiositySystemLogo Windows1" src={systemLogo}/>
        <p>
          O lançamento da funcionabilidade de sopreposição de janelas gerou um processo por parte da concorrente Apple,
          alegando que a Microsoft havia copiado o sistema da empresa, porém quem saiu perdendo foi a própria Apple que 
          não consegiu comprovar suas acusações claramente.
        </p>
      </div>
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

export default PageWindows2