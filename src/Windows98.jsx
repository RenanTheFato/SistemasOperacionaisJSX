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
  const MinesweeperIcon = "./src/assets/Win98Icons/campo-minado.png"


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
      <MinesweeperApp/>
      <ComputerApp/>
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
            <div className="slotContainer" onClick={MinimizeExplorerApp}>
              <img src={InternetExplorerIcon}/>
              <span>Internet Explorer</span>
            </div>
            <div className="slotContainer mines" onClick={MinimizeMinesweeperApp}>
              <img src={MinesweeperIcon}/>
              <span>Campo Minado</span>
            </div>
            <div className="clockWin98">
              <h1>{currentTime}</h1>
            </div>
        </div>
        <div className="system98Icons">
          <div className="RecicleIcon">
            <img src={RecicleIcon} />
            <span>Lixeira</span>
          </div>
          <div className="ComputerIcon" onDoubleClick={MinimizeComputerApp}>
            <img src={ComputerIcon} />
            <span>Computador</span>
          </div>
          <div className="PasteIcon">
            <img src={PasteIcon} />
            <span>Documentos</span>
          </div>
          <div className="InternetIcon" onDoubleClick={MinimizeExplorerApp}>
            <img src={InternetExplorerIcon} />
            <span>Internet Explorer</span>
          </div>
          <div className="MinesweeperIcon" onDoubleClick={MinimizeMinesweeperApp}>
            <img src={MinesweeperIcon} />
            <span>Campo Minado</span>
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
    <div className="internetContainer" onMouseDown={InternetExplorerMove} onMouseUp={InternetExplorerMove} onMouseMove={InternetExplorerMove}>
      <div className="defaultWin98NavBar internetNavBar">
      <img className="explorerSheetIcon" src={ExplorerSheet} />
      <span className="explorerAdress">Internet Explorer</span>
      <button className="closeButtonDefaultWin98" onClick={KillExplorerApp}><img src={CloseIconWin98}/></button>
      <button className="maximizeButtonDefaultWin98" onClick={MaximizeExplorerApp}><img src={MaximizeIconWin98}/></button>
      <button className="minimizeButtonDefaultWin98" onClick={MinimizeExplorerApp}><img src={MinimizeIconWin98}/></button>
      </div>
      <div className="FunctionsNavBar">
        <div className="stopExplorer">
          <img src={StopIcon}/>
          <span>Parar</span>
        </div>
        <div className="refreshExplorer">
          <img src={RefreshIcon}/>
          <span>Recarregar</span>
        </div>
        <div className="homeExplorer" onClick={ExplorerHome}>
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
    function ExplorerHome() {
      const targetRefresh = document.querySelector(".internetIframe")
      const defaultURL = "https://web.archive.org/web/19990125084553/http://alpha.google.com/"
      targetRefresh.src = defaultURL
    }
}

function MinimizeExplorerApp() {
  const targetMinimizeExplorer = document.querySelector('.internetContainer')
  const targetSlot = document.querySelector('.slotContainer')
  const tergetAnimateInternet = document.querySelector('.internetNavBar')

  if (targetMinimizeExplorer.style.display === 'block') {
    targetMinimizeExplorer.style.display = 'none'
    targetSlot.style.display = 'block'
    targetSlot.style.borderTopColor = "#ffffff"
    targetSlot.style.borderLeftColor = "#ffffff"
    targetSlot.style.borderRightColor = "#000000"
    targetSlot.style.borderBottomColor = "#000000"
    targetSlot.style.background = '#b1b1b1'
    tergetAnimateInternet.classList.remove("appBarOpen")
    tergetAnimateInternet.classList.add("appBarClose")
  } else {
    targetMinimizeExplorer.style.display = 'block'
    targetSlot.style.display = 'block'
    targetSlot.style.borderTopColor = "#000000"
    targetSlot.style.borderLeftColor = "#000000"
    targetSlot.style.borderRightColor = "#ffffff"
    targetSlot.style.borderBottomColor = "#ffffff"
    targetSlot.style.background = '#cccccc'
    tergetAnimateInternet.classList.remove("appBarClose")
    tergetAnimateInternet.classList.add("appBarOpen")
  }
}

function MaximizeExplorerApp() {
  const targetFullScreenExplorer = document.querySelector(".internetContainer")
  const buttonMinimize = document.querySelector(".maximizeButtonDefaultWin98")
  const buttonMaximize = document.querySelector(".minimizeButtonDefaultWin98")
  const iframeExplorer = document.querySelector(".internetIframe")

  if (targetFullScreenExplorer.style.width == "100%") {
    targetFullScreenExplorer.style.width = '853px'
    targetFullScreenExplorer.style.height = '473.7px'
    targetFullScreenExplorer.style.border = '2px solid'
    buttonMinimize.style.right = ' 3.3%'
    buttonMaximize.style.right = '6.3%'
    iframeExplorer.style.height = '80%'
  } else {
    targetFullScreenExplorer.style.width = '100%'
    targetFullScreenExplorer.style.height = '100%'
    targetFullScreenExplorer.style.border = 'none'
    targetFullScreenExplorer.style.top =  '50%'
    targetFullScreenExplorer.style.left = '50%'
    buttonMinimize.style.right = '2.5%'
    buttonMaximize.style.right = '4.5%'
    iframeExplorer.style.height = '84.5%'
  }
}

function KillExplorerApp() {
  const targetKillExplorer = document.querySelector('.internetContainer')
  const targetSlotKill = document.querySelector('.slotContainer')

  targetKillExplorer.style.display = 'none'
  targetSlotKill.style.display = 'none'
}

function InternetExplorerMove(){
  const targetDragInternet = document.querySelector('.internetContainer')
  var offsetX, offsetY

  const move =(e) =>{
    targetDragInternet.style.left =`${e.clientX - offsetX}px`
    targetDragInternet.style.top =`${e.clientY - offsetY}px`
  }
  targetDragInternet.addEventListener('mousedown', (e) =>{
    offsetX = e.clientX - targetDragInternet.offsetLeft;
    offsetY = e.clientY - targetDragInternet.offsetTop;
    document.addEventListener('mousemove', move);
  })
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', move);
  });
}

function MinesweeperApp() {
  const MinesweeperIcon = "./src/assets/Win98Icons/campo-minado.png"
  return(
    <>
    <div className="minesweeperContainer">
      <div className="defaultWin98NavBar mines">
      <img className="minesweeperIconNav"src={MinesweeperIcon}/>
      <span className="minesweeperAdress">Campo Minado</span>
      <button className="closeButtonDefaultWin98" onClick={KillMinesApp}><img src={CloseIconWin98}/></button>
      <button className="maximizeButtonDefaultWin98 minesweeper"><img src={MaximizeIconWin98}/></button>
      <button className="minimizeButtonDefaultWin98 minesweeper" onClick={MinimizeMinesweeperApp}><img src={MinimizeIconWin98}/></button>
    </div>
    <iframe className="minesweeperIframe" src="https://98.js.org/programs/minesweeper/index.html"/>
  </div>
    </>
  )
}

function MinimizeMinesweeperApp() {
  const targetMinimizeMines = document.querySelector('.minesweeperContainer')
  const targetSlotMines = document.querySelector('.slotContainer.mines')
  const tergetAnimateMines = document.querySelector('.defaultWin98NavBar.mines')

  const targetRefreshMines = document.querySelector(".minesweeperIframe")
  const defaultURLMines = "https://98.js.org/programs/minesweeper/index.html"
  targetRefreshMines.src = defaultURLMines

  if (targetMinimizeMines.style.display === 'block') {
    targetMinimizeMines.style.display = 'none'
    targetSlotMines.style.borderTopColor = "#ffffff"
    targetSlotMines.style.borderLeftColor = "#ffffff"
    targetSlotMines.style.borderRightColor = "#000000"
    targetSlotMines.style.borderBottomColor = "#000000"
    targetSlotMines.style.background = '#b1b1b1'
    tergetAnimateMines.classList.remove("appBarOpen")
    tergetAnimateMines.classList.add("appBarClose")
  } else {
    targetMinimizeMines.style.display = 'block'
    targetSlotMines.style.display = 'block'
    targetSlotMines.style.borderTopColor = "#000000"
    targetSlotMines.style.borderLeftColor = "#000000"
    targetSlotMines.style.borderRightColor = "#ffffff"
    targetSlotMines.style.borderBottomColor = "#ffffff"
    targetSlotMines.style.background = '#cccccc'
    tergetAnimateMines.classList.remove("appBarClose")
    tergetAnimateMines.classList.add("appBarOpen")
  }
}

function KillMinesApp() {
  const targetKillMines = document.querySelector('.minesweeperContainer')
  const targetSlotKill = document.querySelector('.slotContainer.mines')

  targetKillMines.style.display = 'none'
  targetSlotKill.style.display = 'none'
  const targetRefreshMines = document.querySelector(".minesweeperIframe")
  const defaultURLMines = "https://98.js.org/programs/minesweeper/index.html"
  targetRefreshMines.src = defaultURLMines
}

function ComputerApp() {
  const DirectoryIcon = './src/assets/Win98Icons/diretorio.png'
  const PasteIcon = "./src/assets/Win98Icons/pasta.png"
  const TemplateIcon = "./src/assets/Win98Icons/template.png"
  const SystemIconSheet = './src/assets/Win98Icons/arquivo-windows.png'
  const ConfigComandIcon = './src/assets/Win98Icons/comand-config.png'
  const MinesweeperIcon = "./src/assets/Win98Icons/campo-minado.png"
  const InternetExplorerIcon = "./src/assets/Win98Icons/explorer.png"
  const DefaultArrow98 = './src/assets/Win98Icons/arrow.png'

  function ResetComputerApp() {
    document.querySelector(".directoryScreenName").innerHTML = '(C:)'
    document.querySelector(".mainIconComputer").src = DirectoryIcon
    const targetDirectoryC = document.querySelector(".directoryCIcons")
    const targetProgramFiles = document.querySelector(".programFilesIcons")
    targetDirectoryC.style.display = 'block'
    targetProgramFiles.style.display = 'none'
  }

  function PasteProgramDisplay() {
    document.querySelector(".directoryScreenName").innerHTML = 'Programas'
    document.querySelector(".mainIconComputer").src = PasteIcon
    const targetDirectoryC = document.querySelector(".directoryCIcons")
    const targetProgramFiles = document.querySelector(".programFilesIcons")
    targetDirectoryC.style.display = 'none'
    targetProgramFiles.style.display = 'block'
  }

  return(
    <>
    <div className="computerContainer">
      <div className="defaultWin98NavBar computer">
      <img src={DirectoryIcon} className="directoryIconNav"/>
        <div className="arrowBack98" onClick={ResetComputerApp}>
          <img src={DefaultArrow98}/>
          <div className="backTitle">Início</div>
        </div>
      <button className="closeButtonDefaultWin98" onClick={KillComputerApp}><img src={CloseIconWin98}/></button>
      <button className="maximizeButtonDefaultWin98"><img src={MaximizeIconWin98}/></button>
      <button className="minimizeButtonDefaultWin98" onClick={MinimizeComputerApp}><img src={MinimizeIconWin98}/></button>
      </div>
      <div className="FunctionsNavBar computer">
        <div className="addressExplorer computer">
          <span>Endereço</span>
          <div className="addressTarget computer">
            <img src={DirectoryIcon}/>
            <span>(C:)</span>
          </div>
        </div>
      </div>
      <img className="mainIconComputer" src={DirectoryIcon}/>
      <h1 className="directoryScreenName">(C:)</h1>
      <div className="divisorBarComputer"></div>
      <div className="directoryCIcons">
        <div className="pasteContainer">
          <div className="computerPasteIcons">
            <img src={PasteIcon}/>
            <div className="title">Commands</div>
          </div>
          <div className="computerPasteIcons">
            <img src={PasteIcon}/>
            <div className="title">Win98</div>
          </div>
          <div className="computerPasteIcons" onClick={PasteProgramDisplay}>
            <img src={PasteIcon}/>
            <div className="title">Programas</div>
          </div>
          <div className="computerPasteIcons">
            <img src={PasteIcon}/>
            <div className="title">Windows</div>
          </div>
          <div className="computerPasteIcons">
            <img src={PasteIcon}/>
            <div className="title">Documentos</div>
          </div>
          <div className="computerPasteIcons">
            <img src={TemplateIcon}/>
            <div className="title">Netlog</div>
          </div>
          <div className="computerPasteIcons">
            <img src={TemplateIcon}/>
            <div className="title">Systemlog</div>
          </div>
          <div className="computerPasteIcons">
            <img src={SystemIconSheet}/>
            <div className="title">Oemrom.bin</div>
          </div>
          <div className="computerPasteIcons">
            <img src={SystemIconSheet}/>
            <div className="title">Scandisk.log</div>
          </div>
          <div className="computerPasteIcons">
            <img src={SystemIconSheet}/>
            <div className="title">Win.config</div>
          </div>
          <div className="computerPasteIcons">
            <img src={ConfigComandIcon}/>
            <div className="title">Autoexec</div>
          </div>
        </div>
      </div>
      <div className="programFilesIcons">
        <div className="pasteContainer">
          <div className="computerProgramFilesIcon" onDoubleClick={MinimizeMinesweeperApp}>
            <img src={MinesweeperIcon}/>
            <div className="title">Campo Minado</div>
          </div>
          <div className="computerProgramFilesIcon" onDoubleClick={MinimizeExplorerApp}>
            <img src={InternetExplorerIcon}/>
            <div className="title">Explorer</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
  function KillComputerApp() {
    const targetKillComputer = document.querySelector(".computerContainer")

    targetKillComputer.style.display = 'none'
  }
}

function MinimizeComputerApp() {
  const targetMinimizeComputer = document.querySelector('.computerContainer')
  const targetAnimateComputer = document.querySelector('.defaultWin98NavBar.computer')

  if (targetMinimizeComputer.style.display === 'block') {
    targetMinimizeComputer.style.display = 'none'
    targetAnimateComputer.classList.remove("appBarOpen")
    targetAnimateComputer.classList.add("appBarClose")
  } else {
    targetMinimizeComputer.style.display = 'block'
    targetAnimateComputer.classList.remove("appBarClose")
    targetAnimateComputer.classList.add("appBarOpen")
  }
}
export default Windows98;
