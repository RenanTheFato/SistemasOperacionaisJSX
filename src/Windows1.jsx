import { useEffect, useState} from "react";
import "./styles/Windows1.css";


function Windows1() {
  return (
    <>
      <div className="window">
        <SystemHeader 
        doIt = {hide}
        />
        <div className="system">
          <Screen 
          doIt = {hide}
          />
          <CalculatorApp 
          doIt = {hide}
          />
          <SystemWarn />
          <Write />
          <CHKDSK />
        </div>
      </div>
    </>
  );
}

function SystemHeader() {
  return (
    <>
      <div className="windows1Header">
        <button className="three" onClick={Clear}>G</button>
        <div className="headerTitle">
          <h1>MS-DOS Executive</h1>
        </div>
      </div>
      <div className="yellowTarget">
        <ul className="menu">
          <li>File</li>
          <li>View</li>
          <li>Special</li>
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
          <h1>C: \windows</h1>
        </div>
      </div>
    </>
  );
}

function Screen() {
  return (
    <>
      <div className="aplications">
        <li onClick={hideWarn}>ANSI.SYS</li>
        <li>BACKUP.COM</li>
        <li className="calcList" onClick={hide}>CALC.EXE</li>
        <li onClick={hideCHK}>CHKDSK.COM</li>
        <li>MSDOS.EXE</li>
        <li onClick={hideWarn}>MUSIC.BAS</li>
        <li onClick={hideWarn}>SCRIPT.FON</li>
        <li onClick={hideWarn}>WIN.COM</li>
        <li onClick={hideWarn}>WIN.INI</li>
        <li onClick={hideWarn}>WIN100.BIN</li>
        <li  onClick={hideWarn}>WIN100.OVl</li>
        <li onClick={hideWrite}>WRITE.EXE</li>
      </div>
    </>
  );
}

function CalculatorApp() {
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
  return (
    <>
    <div className="con">
      <div className="calcContainer">
        <form>
          <input type="text" value={resultado} />
        </form>
        <div className="keyNum">
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
    </div>
    </>
  );
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

function Write(){
  return(
    <>
    <div className="writeContainer">
    <textarea className="writeText" />
    </div>
    </>
  )
}

function CHKDSK(){
  return(
    <>
    <div className="chkContainer">
    <li>200000 bytes espaço total do disco</li>
    <li>15867 bytes em 2 arquivos ocultos</li>
    <li>147838 bytes em 12 arquivos do usuário</li>
    <li><br /></li>
    <li>23539 bytes memória total</li>
    <li>36295 bytes livres</li>
    </div>
    </>
  )
}

function Clear(){
  const targetHideC = document.querySelector('.con')
  const targetWriteC = document.querySelector(".writeContainer")
  const screenAppC = document.querySelector('.aplications')
  const directoriesC = document.querySelector('.directories')
  const targetCHKC = document.querySelector('.chkContainer')

  targetHideC.style.display = "none"
  targetWriteC.style.display = "none"
  targetCHKC.style.display = "none"
  screenAppC.style.display = "block"
  directoriesC.style.display = "block"
}

function hideWrite(){
  const targetWrite = document.querySelector(".writeContainer")
  const screenApp = document.querySelector('.aplications')
  const directories = document.querySelector('.directories')
  if (targetWrite.style.displyat === "block") {
    targetWrite.style.display = 'none'
    screenApp.style.display = 'block'
    directories.style.display = 'block'
    teste.style.display = "none"
  } else {
    targetWrite.style.display = 'block'
    screenApp.style.display = 'none'
    directories.style.display = 'none'
  }
}

function hideCHK(){
  const targetCHK = document.querySelector(".chkContainer")
  const screenApp = document.querySelector('.aplications')
  const directories = document.querySelector('.directories')

  if (targetCHK.style.displyat === "block") {
    targetCHK.style.display = 'none'
    screenApp.style.display = 'block'
    directories.style.display = 'block'
    teste.style.display = "none"
  } else {
    targetCHK.style.display = 'block'
    screenApp.style.display = 'none'
    directories.style.display = 'none'
  }
}

function hide() {
  const targetHide = document.querySelector('.con')
  const screenApp = document.querySelector('.aplications')
  const directories = document.querySelector('.directories')

  if (targetHide.style.display === 'block') {
    targetHide.style.display = 'none'
    screenApp.style.display = 'block'
    directories.style.display = 'block'
  } else {
    targetHide.style.display = 'block'
    screenApp.style.display = 'none'
    directories.style.display = 'none'
  };
}

function hideWarn() {
  const warnTarget = document.querySelector(".windows1Warn")
  if (warnTarget.style.display === "block") {
    warnTarget.style.display = "none"
  } else {
    warnTarget.style.display = "block"
  }
}

export default Windows1;
