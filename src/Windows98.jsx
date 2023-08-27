import { useEffect, useState, useRef } from "react";
import "./styles/Windows98.css";

const MaximizeIconWin98 = "./src/assets/Win98Icons/maximize.svg"
const MinimizeIconWin98 = "./src/assets/Win98Icons/minimize.svg"
const RestoreIconWin98 = "./src/assets/Win98Icons/restore.svg"
const CloseIconWin98 = "./src/assets/Win98Icons/close.svg"

function Windows98() {
  const startIcon = "./src/assets/Win98Icons/windows-0.png"
  const RecicleIcon = "./src/assets/Win98Icons/lixeira.png"
  const ComputerIcon = "./src/assets/Win98Icons/computer.png"
  const PasteIcon = "./src/assets/Win98Icons/pasta.png"
  const PowerOffIcon = "./src/assets/Win98Icons/desligar.png"
  const LogOffIcon = "./src/assets/Win98Icons/logOff.png"
  const ExeIcon = "./src/assets/Win98Icons/executar.png"
  const DocsIcon = "./src/assets/Win98Icons/documentos.png"
  const ConfigIcon = "./src/assets/Win98Icons/config.png"
  const ProgmIcon = "./src/assets/Win98Icons/programas.png"
  const HelpIcon = "./src/assets/Win98Icons/ajuda.png"
  const PasteIcon2 = "./src/assets/Win98Icons/pasta2.png"
  const TemplateIcon = "./src/assets/Win98Icons/template.png"
  const InternetExplorerIcon = "./src/assets/Win98Icons/explorer.png"


  let time = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = useState(time)

  const updateTime = () => {
    let time=  new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    setCurrentTime(time)
  }
  setInterval(updateTime, 1000)
  return (
    <>
    <div className="system98">
      <InternetExplorerApp/>
    <div className="systemStartMenu">
      <div className="lateralBar">
        <h1 className="system98Title">WINDOWS 98</h1>
      </div>
      <div className="powerOffIcon">
        <img src={PowerOffIcon}/>
        <span>Desligar</span>
      </div>
      <div className="logOffIcon">
        <img src={LogOffIcon}/>
        <span>Efetuar Logoff</span>
      </div>
      <div className="line1"></div>
      <div className="helpIcon">
        <img src={HelpIcon}/>
        <span>Ajuda</span>
      </div>
      <div className="exeIcon">
        <img src={ExeIcon}/>
        <span>Executar...</span>
      </div>
      <div className="docIcon">
        <img src={DocsIcon}/>
        <span>Documentos</span>
      </div>
      <div className="configIcon">
        <img src={ConfigIcon}/>
        <span>Configurações</span>
      </div>
      <div className="progmIcon">
        <img src={ProgmIcon}/>
        <span>Programas</span>
      </div>
      <div className="line2"></div>
      <div className="templateIcon">
        <img src={TemplateIcon}/>
        <span>Novo Arquivo</span>
      </div>
      <div className="paste2Icon">
        <img src={PasteIcon2}/>
        <span>Abrir Documento</span>
      </div>
    </div>
        <div className="systemNavBar">
            <button className="systemStartButton" onClick={ShowHideMenu}><img src={startIcon} /></button>
            <button className="systemStartButton2" onClick={ShowHideMenu}><img src={startIcon} /></button>
            <div className="clockWin98">
              <h1>{currentTime}</h1>
            </div>
        </div>
        <div className="system98Icons">
          <div className="RecicleIcon">
            <img src={RecicleIcon} />
            <span>Lixeira</span>
          </div>
          <div className="ComputerIcon">
            <img src={ComputerIcon} />
            <span>Computador</span>
          </div>
          <div className="PasteIcon">
            <img src={PasteIcon} />
            <span>Documentos</span>
          </div>
          <div className="InternetIcon">
            <img src={InternetExplorerIcon} />
            <span>Internet Explorer</span>
          </div>
        </div>
    </div>
    </>
  );
}

function ShowHideMenu() {
  const targetAnimationMenu = document.querySelector(".systemStartMenu")
  const handleShowMenu = document.querySelector(".systemStartButton")
  const handleHideMenu = document.querySelector(".systemStartButton2")
  if (handleShowMenu.style.display === 'block') {
    targetAnimationMenu.classList.remove("animateDown")
    targetAnimationMenu.classList.add("animateUp")
    handleShowMenu.style.display = 'none'
    handleHideMenu.style.display = 'block'
  } else {
    targetAnimationMenu.classList.remove("animateUp")
    targetAnimationMenu.classList.add("animateDown")
    handleShowMenu.style.display = 'block'
    handleHideMenu.style.display = 'none'
  }
}

function InternetExplorerApp() {
  const ExplorerSheet = "./src/assets/Win98Icons/arquivo-explorer.png"
  const StopIcon = "./src/assets/Win98Icons/stop.png"
  const HomeIcon = "./src/assets/Win98Icons/home.png"
  const RefreshIcon = "./src/assets/Win98Icons/recarregar.png"
  return(
    <>
    <div className="internetContainer">
      <div className="internetNavBar">
      <img className="explorerSheetIcon" src={ExplorerSheet} />
      <span className="explorerAdress">https://web.archive.org/web/1998/https://www.google.com/</span>
      <button className="closeButtonDefaultWin98"><img src={CloseIconWin98}/></button>
      <button className="maximizeButtonDefaultWin98"><img src={MaximizeIconWin98}/></button>
      <button className="minimizeButtonDefaultWin98"><img src={MinimizeIconWin98}/></button>
      </div>
      <div className="explorerFunctionsNavBar">
        <div className="stopExplorer">
          <img src={StopIcon}/>
          <span>Parar</span>
        </div>
        <div className="refreshExplorer">
          <img src={RefreshIcon}/>
          <span>Recarregar</span>
        </div>
        <div className="homeExplorer">
          <img src={HomeIcon}/>
          <span>Início</span>
        </div>
      </div>
      <div className="addressExplorer">
        <span>Endereço</span>
        <div className="addressTarget">
          <img src={ExplorerSheet}/>
          <span>https://web.archive.org/web/1998/https://www.google.com/</span>
        </div>
      </div>
      <iframe className="internetIframe" src="https://web.archive.org/web/19990125084553/http://alpha.google.com/"/>
    </div>
    </>
  )
}

// https://web.archive.org/web/19990125084553/http://alpha.google.com/

export default Windows98;
