import { useState } from "react";
import "./styles/FirstWindow.css";
import Header from "./Header"

function FirstWindow({ nome }) {
  const background = "./src/assets/FirstWindowBackgroundEffect.png";
  return (
    <div className="main">
      <Header />
      <img className="bgImage effect" src={background} />
      <div className="mainTitleOS">
        <h1 className="titleOS">Sistemas Operacionais</h1>
        <Paragraph text={true} />
      </div>
      <SecondBox/>
      <ThirdBox/>
      <Fontes/>
    </div>
  );
  function Paragraph({ text }) {
    return (
      <div>
        <p className="textOS">
          Nomes: Renan Dias Santos de Santana<br/>
          <span>Yorran Gabriel Correa da Cruz</span>
          <span className="sala">1°AMS</span>
        </p>
      </div>
    );
  }
}

function SecondBox() {
  return(
    <>
    <div className="container2" id="box2">
      <h1 className="box2Title">O que é um Sistema Operacional?</h1>
      <div className="firstTextBox2">
      <p>Um sistema operacional é aquilo que <span className="highlight1">gerencia e administra</span> os recursos do sistema, estabelecendo relação direta com o hardware e o software, 
        proporcionando ao usuário uma <span className="highlight2">conexão direta</span> com os recursos de um computador.</p>
      </div>
      <div className="secondTextBox2">
        <p>Os sistemas operacionais apresentam características e propósitos diferentes entre suas versões e modelos, como <span className="underline1">
          interfaces graficás, distribuição de tarefas, desempenho, mobilidade, segurança</span>.<br/>Alguns dos sistemas operacionais mais 
          usados são o <span className="highlight3"> Windows, </span><span className="highlight4">Linux, </span>MAC-OS. E nos 
          dispositivos móveis são o <span className="highlight5"> Android </span> e o iOS.</p>
      </div>
      <video className="mainVideo" src="./src/assets/Videos/pcMain.mp4" type="video/mp4" autoPlay loop muted>
      </video>
    </div>
    </>
  )
}

function ThirdBox() {
  const Win1Logo = "./src/assets/Logos/windows1logo.png"
  const Win3Logo = "./src/assets/Logos/windows3logo.png"
  const Win2000Logo = "./src/assets/Logos/windows2000logo.png"
  const WinMeLogo = "./src/assets/Logos/windowsmelogo.png"
  const WinVistaLogo = "./src/assets/Logos/windowsvistalogo.png"
  const Win10Logo = "./src/assets/Logos/windows10logo.png"
  const Win11Logo = "./src/assets/Logos/windows11logo.png"
  const UnixLogo = "./src/assets/Logos/unixlogo.png"
  const LinuxLogo = "./src/assets/Logos/linuxlogo.png"
  const MacLogo = "./src/assets/Logos/macoslogo.png"
  return(
    <>
    <div className="container3">
    <h1 className="box3Title">Versões de Sistemas Operacionais</h1>
    <div className="buttonContainer">
    <button className="osButtons"><a href="/Windows1"><img src={Win1Logo}/>Windows 1.0</a></button>
    <button className="osButtons"><a href="/Windows2"><img src={Win1Logo}/>Windows 2.0</a></button>
    <button className="osButtons"><a href="/Windows3"><img src={Win3Logo}/>Windows 3.0</a></button>
    <button className="osButtons"><a href="/Windows95"><img src={Win3Logo}/>Windows 95</a></button>
    <button className="osButtons"><a href="/WindowsNT"><img src={WinMeLogo}/>Windows ME e NT</a></button>
    <button className="osButtons"><a href="/Windows98"><img src={Win3Logo}/>Windows 98</a></button>
    <button className="osButtons"><a href="/Windows2000"><img src={Win2000Logo}/>Windows 2000</a></button>
    <button className="osButtons"><a href="/WindowsXP"><img src={WinVistaLogo}/>Windows XP</a></button>
    <button className="osButtons"><a href="/WindowsVista"><img src={WinVistaLogo}/>Windows VISTA</a></button>
    <button className="osButtons"><a href="/Windows7"><img src={WinVistaLogo}/>Windows 7</a></button>
    <button className="osButtons"><a href="/Windows8"><img src={Win10Logo}/>Windows 8</a></button>
    <button className="osButtons"><a href="/Windows10"><img src={Win10Logo}/>Windows 10</a></button>
    <button className="osButtons"><a href="/Windows11"><img src={Win11Logo}/>Windows 11</a></button>
    <button className="osButtons unix"><a href="/Unix"><img src={UnixLogo}/>Unix</a></button>
    <button className="osButtons linux"><a href="/Linux"><img src={LinuxLogo}/>Linux</a></button>
    <button className="osButtons"><a href="/Mac"><img src={MacLogo}/>MAC-OS</a></button>
    </div>
    </div>
    </>
  )
}

function Fontes(){
  return(
    <div className="footer">
      <button className="fonte1"><a href="https://winworldpc.com/home">WinWorldPC</a></button>
      <button className="fonte2"><a href="https://cin.ufpe.br/~bfp/Arquivos/3196_Sistemas%20Operacionais.pdf">UFPE Pdf</a></button>
      <button className="fonte3"><a href="https://www.tecmundo.com.br/windows-10/64136-windows-1-windows-10-29-anos-evolucao-do-so-microsoft.htm">Tech Mundo</a></button>
    </div>
  )
}

export default FirstWindow;
