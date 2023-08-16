import { useEffect, useState, useRef } from "react";
import "./styles/Windows3.css";

function Windows3() {
  const windowsMainIcon = "./src/assets/Win3Icons/PROGM004.png"
  return (
    <>
      <div className="system3">
        <div className="mainSystemIcon" onClick={MinimizeMainPaste}>
          <img src={windowsMainIcon} />
          <span>Main</span>
        </div>
        <ProgramManager />
        <MsDosPrompt />
      </div>
    </>
  );
}

function ProgramManager(){
    const programIcon = "./src/assets/Win3Icons/PROGM004.png"
    const arrowDownM = "./src/assets/Win3Icons/PROGM043.png"
    const arrowUpM = "./src/assets/Win3Icons/PROGM046.png"
    return(
        <>
        <div className="programContainer" onMouseDown={ProgramManagerMove} onMouseUp={ProgramManagerMove} onMouseMove={ProgramManagerMove}>
            <div className="programHeader">
              <button className="arrowDownManager"><img src={arrowDownM} /></button>
              <button className="arrowUpManager"><img src={arrowUpM} /></button>
                <h1 className="programTitle">Program Manager</h1>
                <div className="whiteTarget">
                    <ul className="programMenu">
                        <li><u>F</u>ile</li>
                        <li><u>O</u>ptions</li>
                        <li><u>W</u>indow</li>
                        <li><u>H</u>elp</li>
                    </ul>
                </div>
            </div>
            <MainPasteProgramManager />
            <div className="accessoriesIcon">
                <img src={programIcon}/><br />
                <span>Accessories</span>
            </div>
            <div className="gamesIcon">
              <img src={programIcon}/><br/>
              <span>Games</span>
            </div>
            <div className="mainIcon">
              <img src={programIcon}/><br/>
              <span>Main</span>
            </div>
        </div>
        </>
    )
}



function ProgramManagerMove(){
  const targetDragWrite = document.querySelector('.programContainer')
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

function MainPasteProgramManager(){
  const fileManager = "./src/assets/Win3Icons/WINFI001.png"
  const MsPropmtManager = "./src/assets/Win3Icons/PROGM010.png"
  const windowsSetupManager = "./src/assets/WIn3Icons/WINSE001.png"
  const arrowDownMain = "./src/assets/Win3Icons/PROGM043.png"
  const arrowUpMain = "./src/assets/Win3Icons/PROGM046.png"
  return(
    <>
    <div className="mainProgramMContainer">
      <div className="mainProgramMHeader">
        <button className="exitMainPaste">─</button>
        <button className="arrowDownMain" onClick={MinimizeMainPaste}><img src={arrowDownMain} /></button>
        <button className="arrowUpMain"><img src={arrowUpMain} /></button>
        <h1 className="mainProgramMTitle">Main</h1>
      </div>
      <div className="fileManagerEXE">
        <img src={fileManager} /><br/>
        <span>File Manager</span>
      </div>
      <div className="promptManagerEXE" onDoubleClick={MsPromptHide}>
        <img src={MsPropmtManager} /><br/>
        <span>MS-DOS <br />Prompt</span>
      </div>
      <div className="windowsSetupEXE">
        <img src={windowsSetupManager} /><br/>
        <span>Windows Setup</span>
      </div>
    </div>
    </>
  )
}

function MinimizeMainPaste() {
  const targetMinimizeMain = document.querySelector(".mainProgramMContainer")
  const MinimizeMainIcon = document.querySelector(".mainSystemIcon")

  if (targetMinimizeMain.style.display === 'block') {
    targetMinimizeMain.style.display = 'none'
    MinimizeMainIcon.style.display = 'block'
  } else {
    targetMinimizeMain.style.display = 'block'
    MinimizeMainIcon.style.display = 'none'
  }
}

function MsPromptHide() {
  const programManagerHide = document.querySelector(".programContainer")
  const terminalContainer = document.querySelector(".prompt")

  programManagerHide.style.display = 'none'
  terminalContainer.style.display = 'block'
}

function MsDosPrompt(){
  const [MsInput, setMsInput] = useState("")
  const [MsOutput, setMsOutput] = useState("")
  const MsInputRef = useRef()
  useEffect(() =>{
    MsInputRef.current.focus()
  },[])

  const promptWindow = document.querySelector(".prompt")
  const showWindows =  document.querySelector(".programContainer")
  const cleanTerminal = document.querySelector(".terminal")
  return(
    <>
    <div className="prompt" onClick={e=>{MsInputRef.current.focus()}}>
      <input className="MSPrompt" type="text" ref={MsInputRef} value={MsInput} onChange={e => setMsInput(e.target.value)} onKeyDown={e =>{
        if (e.key === "Enter") {
          let newMsOutput = ""
          newMsOutput = MsOutput + "\n" + "C: " + MsInput + "\n"
          switch (MsInput){
            case "chkdsk":
              newMsOutput += "596905 bytes em memóeria" + "\n" + "293882892 bytes livre";
              break;
            case "exit":
              promptWindow.style.display = 'none'
              showWindows.style.display = 'block'
              break;
            case "cls":
              newMsOutput += "limpou"
              break;
            default:
              newMsOutput += "C: " + "Invalid"
          }
          setMsOutput(newMsOutput)
          setMsInput("")
        }
      }}/>
      <div className="terminal">
        {MsOutput}
      </div>
    </div>
    </>
  )
}

export default Windows3;
