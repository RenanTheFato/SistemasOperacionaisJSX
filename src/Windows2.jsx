import { useEffect, useState } from "react";
import "./styles/Windows2.css";

function Windows2() {
  const calcIcon = "./src/assets/calculator.png"
  return (
<>
    <div className="window2">
        <SystemHeader2 />
        <img className="calcIcon" src={calcIcon} onClick={hideCalc2} />
        <div className="system2">
          <Screen2 />
          <Win2Calc />
        </div>
    </div>
</>
  );
}

function SystemHeader2() {
    return (
      <>
        <div className="windows2Header">
          <button className="exit">─</button>
          <button className="arrowDown">B</button>
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
          <li>ANSI.SYS</li>
          <li>BACKUP.COM</li>
          <li>CHKDSK.COM</li>
          <li>CONFIG.SYS</li>
          <li>DISKINIT.COM</li>
          <li>DEBUG.COM</li>
          <li>FORMAT.COM</li>
          <li>GRAPHICS.COM</li>
          <li>KEYBOARD.COM</li>
          <li>MSDOS.EXE</li>
          <li>MUSIC.BAS</li>
          <li>PRINT.COM</li>
          <li>SCRIPT.FON</li>
            <div className="aplications2-1">
            <li>SYS.COM</li>
            <li>USER.DAT</li>
            <li>WIN.COM</li>
            <li>WIN.INI</li>
            <li>VDISK.SYS</li>
            <li>WINA20.386</li>
            <li>WORDS</li>
            </div>
        </div>
        <div className="windowsEXE">
            <li className="pif">PIF</li>
            <li onClick={hideCalc2}>CALC.EXE</li>
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
      <div className="win2Calc">
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
            <input type="text" value={resultado} />
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

export default Windows2;
