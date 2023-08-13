import { useEffect, useState } from "react";
import "./styles/Windows2.css";

function Windows2() {
  const calcIcon = "./src/assets/calculator.png"
  const systemIcon = "./src/assets/win1icon.png"
  const writeIcon = "./src/assets/writeIcon1.png"
  return (
<>
    <div className="window2">
        <SystemHeader2 />
        <img className="calcIcon" src={calcIcon} onClick={hideCalc2} />
        <img className="systemIcon" src={systemIcon} onClick={MsDosHide}/>
        <img className="writeIcon" src={writeIcon} onClick={hideWrite2} />
        <Win2Calc />
        <Win2Write />
        <SystemWarn />
        <ChkdksWin2 />
        <div className="system2">
          <Screen2 />
        </div>
    </div>
</>
  );
}

function MsDosHide(){
  const system2 = document.querySelector('.system2')
  const SystemHeader2 = document.querySelector('.windows2Header')
  const aquaTarget = document.querySelector('.aquaTarget')
  const directories = document.querySelector('.directories')
  const systemIconHide = document.querySelector('.systemIcon')


  if (systemIconHide.style.display === 'block') {
    systemIconHide.style.display = 'none'
    system2.style.display = 'block'
    SystemHeader2.style.display = 'block'
    aquaTarget.style.display = 'block'
    directories.style.display = 'block'
  } else{
    systemIconHide.style.display = 'block'
    system2.style.display = 'none'
    SystemHeader2.style.display = 'none'
    aquaTarget.style.display = 'none'
    directories.style.display = 'none'
  }
}

function SystemHeader2() {
    return (
      <>
        <div className="windows2Header">
          <button className="exit">─</button>
          <button className="arrowDown" onClick={MsDosHide}>B</button>
          <button className="arrowUp">A</button>
          <div className="headerTitle">
            <h1>MS-DOS Executive</h1>
          </div>
        </div>
        <div className="aquaTarget">
          <ul className="menu">
            <li><u>F</u>ile</li>
            <li><u>V</u>iew</li>
            <li><u>S</u>pecial</li>
          </ul>
        </div>
        <div className="directories">
          <div className="cDirectory">
            <h1>C</h1>
          </div>
          <div className="directoryInput">
            <span>━━─━━</span>
          </div>
          <div className="directoryName">
            <h1>C: \MS-DOS_6</h1>
            <h1 className="windowsDirectory" onClick={WindowsHide}>\windows</h1>
          </div>
        </div>
      </>
    );
  }

  function Screen2() {
    return (
      <>
        <div className="aplications2">
          <li className="native">DOS</li>
          <li className="native" onClick={WindowsHide}>WINDOWS</li>
          <li onClick={hideWarn}>ANSI.SYS</li>
          <li onClick={hideWarn}>BACKUP.COM</li>
          <li onClick={hideChkdsk2}>CHKDSK.COM</li>
          <li onClick={hideWarn}>CONFIG.SYS</li>
          <li onClick={hideWarn}>DISKINIT.COM</li>
          <li onClick={hideWarn}>DEBUG.COM</li>
          <li onClick={hideWarn}>FORMAT.COM</li>
          <li onClick={hideWarn}>GRAPHICS.COM</li>
          <li onClick={hideWarn}>KEYBOARD.COM</li>
          <li onClick={hideWarn}>MSDOS.EXE</li>
          <li onClick={hideWarn}>MUSIC.BAS</li>
          <li onClick={hideWarn}>PRINT.COM</li>
          <li onClick={hideWarn}>SCRIPT.FON</li>
            <div className="aplications2-1">
            <li onClick={hideWarn}>SYS.COM</li>
            <li onClick={hideWarn}>USER.DAT</li>
            <li onClick={hideWarn}>WIN.COM</li>
            <li onClick={hideWarn}>WIN.INI</li>
            <li onClick={hideWarn}>VDISK.SYS</li>
            <li onClick={hideWarn}>WINA20.386</li>
            <li onClick={hideWarn}>WORDS</li>
            </div>
        </div>
        <div className="windowsEXE">
            <li className="pif">PIF</li>
            <li onClick={hideCalc2}>CALC.EXE</li>
            <li onClick={hideWrite2}>WRITE.EXE</li>
        </div>
      </>
    );
  }

  function Win2Calc() {
    const [resultado, setResultado] = useState("");
    const click = (evento) =>{
      setResultado(resultado.concat(evento.target.name));
    }
    const clear = () => {
      setResultado("");
    }
    const calcular = () =>{
      setResultado(eval(resultado).toString());
    }

    return(
      <>
      <div className="win2Calc" onMouseDown={CalcMove} onMouseUp={CalcMove} onMouseMove={CalcMove}>
        <div className="calc2Header">
        <button className="exitCalc" onClick={killCalc}>─</button>
        <button className="arrowDownCalc" onClick={hideCalc2}>B</button>
          <div className="calcTitle2">
          <h1>CALCULATOR</h1>
          </div>
        </div>
        <div className="aquaTargetCalc">
            <li><u>E</u>dit</li>
          </div>
          <form>
            <input className="calcResult" type="text" value={resultado} readOnly />
          </form>
          <div className="keyNum2">
            <button name="8" onClick={click}>8</button>
            <button name="9" onClick={click}>9</button>
            <button name="7" onClick={click}>7</button>
            <button name="/" onClick={click}>&#47;</button>
            <button name="4" onClick={click}>4</button>
            <button name="5" onClick={click}>5</button>
            <button name="6" onClick={click}>6</button>
            <button name="*" onClick={click}>&#42;</button>
            <button name="1" onClick={click}>1</button>
            <button name="2" onClick={click}>2</button>
            <button name="3" onClick={click}>3</button>
            <button onClick={clear} id="clear">C</button>
            <button name="0" onClick={click}>0</button>
            <button name="." onClick={click}>.</button>
            <button name="+" onClick={click}>+</button>
            <button name="-" onClick={click}>&ndash;</button>
            <button  onClick={calcular} id="result">=</button>
          </div>
      </div>
      </>
    )
  }

  function Win2Write() {
    return(
      <>
      <div className="win2Write" onMouseDown={WriteMove} onMouseUp={WriteMove} onMouseMove={WriteMove}>
      <div className="write2Header">
        <button className="exitWrite" onClick={KillWrite}>─</button>
        <button className="arrowDownWrite" onClick={Win2WriteFullScreen}>B</button>
        <button className="arrowDownWriteMin" onClick={hideWrite2}>B</button>
        <button className="arrowUpWrite" onClick={Win2WriteFullScreen}>A</button>
          <div className="writeTitle2">
          <h1>WRITE</h1>
          </div>
        </div>
        <div className="aquaTargetCalc">
            <li><u>E</u>dit</li>
          </div>
          <textarea className="writeText2"/>
      </div>
      </>
    )
  }

  function SystemWarn(){
    return(
      <>
      <div className="windows1Warn">
        <div className="warnHeader">
          <div className="warnTitle">
          <h1>MS-DOS</h1>
          </div>
        </div>
        <div className="warnIcon">
          <h1>!</h1>
        </div>
          <h1 className="warnText">Não é possivel executar este arquivo</h1>
          <button className="warnExit" onClick={hideWarn}>OK</button>
      </div>
      </>
    )
  }

  function ChkdksWin2(){
    return(
      <>
      <div className="chkdskContainer2">
        <div className="chkdskHeader2">
          <button className="exitChkdsk2" onClick={hideChkdsk2}>─</button>
          <div className="chkdskTitle2">
            <h1>CHKDSK</h1>
          </div>
        </div>
        <div className="chkdskItems2">
          <li>360000 bytes espaço total do disco</li>
          <li>17638 bytes em 2 arquivos ocultos</li>
          <li>206241 bytes em 22 arquivos do usuário</li>
          <li><br /></li>
          <li>509613 bytes memória total</li>
          <li>136121 bytes livres</li>
        </div>
      </div>
      </>
    )
  }

  function Win2WriteFullScreen() {
    const targetFullScreen = document.querySelector('.win2Write')
    const targetTextarea2 = document.querySelector('.writeText2')
    const targetAplications2 = document.querySelector('.aplications2')
    const targetMaximize = document.querySelector('.arrowUpWrite')
    const targetMinimize = document.querySelector('.arrowDownWrite')
    const writeIconHideMinimize = document.querySelector('.writeIcon')
    const targetMinimize2 = document.querySelector('.arrowDownWriteMin')

    targetMaximize.addEventListener('click', writeMax)
    targetMinimize.addEventListener('click', writeMinimize)
    function writeMax() {
      targetFullScreen.style.width = '100%'
      targetFullScreen.style.height = '100%'
      targetTextarea2.style.height = '100%'
      targetAplications2.style.display = 'none'
      writeIconHideMinimize.style.display = 'none'
      targetMinimize.style.display = 'block'
      targetMinimize2.style.display = 'none' 
    }
    function writeMinimize() {
      targetFullScreen.style.width = '65vw'
      targetFullScreen.style.height = '65vh'
      targetTextarea2.style.height = '54.8vh'
      targetAplications2.style.display = 'none'
      writeIconHideMinimize.style.display = 'none'
      targetMinimize2.style.display = 'block'
      targetMinimize.style.display = 'none' 
    }
  }

  function KillWrite(){
    const targetWriteKill = document.querySelector('.win2Write')
    const writeIconKill = document.querySelector('.writeIcon')
    const targetWriteClean = document.querySelector('.writeText2')
    targetWriteKill.style.display = 'none'
    writeIconKill.style.display = 'none'
    targetWriteClean.value = ''
  }

  function hideWrite2() {
    const targetHideWrite = document.querySelector('.win2Write')
    const writeIconHide = document.querySelector('.writeIcon')

    if (targetHideWrite.style.display === 'block') {
      targetHideWrite.style.display = 'none'
    } else {
      targetHideWrite.style.display = 'block'
    }
    if (targetHideWrite.style.display === 'none') {
      writeIconHide.style.display = 'block'
    } else {
      writeIconHide.style.display = 'none'
    }
  }

  function WriteMove(){
    const targetDragWrite = document.querySelector('.win2Write')
    var offsetX, offsetY

    const move =(e) =>{
      targetDragWrite.style.left =`${e.clientX - offsetX}px`
      targetDragWrite.style.top =`${e.clientY - offsetY}px`
    }
    targetDragWrite.addEventListener('mousedown', (e) =>{
      offsetX = e.clientX - targetDragWrite.offsetLeft;
      offsetY = e.clientY - targetDragWrite.offsetTop;
      document.addEventListener('mousemove', move);
    })
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    });
  }

  function hideCalc2() {
    const targetHide = document.querySelector('.win2Calc')
    const calcIconHide = document.querySelector('.calcIcon')
    if (targetHide.style.display === 'block') {
      targetHide.style.display = 'none'
    } else {
      targetHide.style.display = 'block'
    }
    if (targetHide.style.display === 'none') {
      calcIconHide.style.display = 'block'
    } else {
      calcIconHide.style.display = 'none'
    };
  }

  function CalcMove(){
    const targetDrag = document.querySelector('.win2Calc')
    var offsetX, offsetY

    const move =(e) =>{
      targetDrag.style.left =`${e.clientX - offsetX}px`
      targetDrag.style.top =`${e.clientY - offsetY}px`
    }
    targetDrag.addEventListener('mousedown', (e) =>{
      offsetX = e.clientX - targetDrag.offsetLeft;
      offsetY = e.clientY - targetDrag.offsetTop;
      document.addEventListener('mousemove', move);
    })
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    });
  }

  function killCalc() {
    const targetHide = document.querySelector('.win2Calc')
    const calcIconHide = document.querySelector('.calcIcon')

    targetHide.style.display = 'none'
    calcIconHide.style.display = 'none'
  }

function WindowsHide(){
    const targetWindows = document.querySelector(".windowsEXE")
    const windowsDirectory = document.querySelector(".windowsDirectory")
    const aplications2 = document.querySelector(".aplications2")
    const aplications21 = document.querySelector(".aplications2-1")
    
    if (targetWindows.style.display === "block") {
        targetWindows.style.display = 'none'
        windowsDirectory.style.display = 'none'
        aplications2.style.display = 'block'
        aplications21.style.display = 'block'
    } else {
        targetWindows.style.display = 'block'
        windowsDirectory.style.display = 'block'
        aplications2.style.display = 'none'
        aplications21.style.display = 'none'
    }

}

function hideWarn() {
  const warnTarget = document.querySelector(".windows1Warn")
  if (warnTarget.style.display === "block") {
    warnTarget.style.display = "none"
  } else {
    warnTarget.style.display = "block"
  }
}

function hideChkdsk2() {
  const targetHideChkdsk2 = document.querySelector('.chkdskContainer2')

  if (targetHideChkdsk2.style.display === 'block') {
    targetHideChkdsk2.style.display = 'none'
  } else {
    targetHideChkdsk2.style.display = 'block'
  }
}

export default Windows2;
