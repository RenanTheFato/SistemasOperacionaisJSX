import { useEffect, useState, useRef } from "react";
import { songsdata } from "./songs.js";
import MediaPlayerApp3 from "./AudioComponents/Windows3AudioPlayer.jsx";
import "./styles/Windows3.css";

function Windows3({setCurrentSong}) {
  const windowsMainIcon = "./src/assets/Win3Icons/PROGM004.png"
  const calcAppIcon3 = "./src/assets/Win3Icons/CALC001.png"
  const writeIcon3 = "./src/assets/Win3Icons/WRITE001.png"
  const mediaIcon3 = "./src/assets/Win3Icons/MPLAY001.png"

  const [songs,setSongs] = useState(songsdata)
  const [isPlaying,setisPlaying] = useState(false)

  const audioPlayer = useRef()

  return (
    <>
      <div className="system3">
        <div className="mainSystemIcon" onClick={MinimizeMainPaste}>
          <img src={windowsMainIcon} />
          <span>Main</span>
        </div>
        <div className="accessoriesSystemIcon" onClick={MinimizeAccessoriesPaste}>
          <img src={windowsMainIcon} />
          <span>Accessories</span>
        </div>
        <div className="calculatorIconWin3" onClick={Win3MinimizeCalc}>
          <img src={calcAppIcon3} />
          <span>Calculator</span>
        </div>
        <div className="writeIconWin3" onClick={MinimizeWriteApp3}>
          <img src={writeIcon3} />
          <span>Write</span>
        </div>
        <div className="mediaPlayerIcon3" onClick={MinimizeMediaPlayerApp3}>
          <img src={mediaIcon3} />
          <span>Media Player</span>
        </div>
        <ProgramManager />
        <MsDosPrompt />
        <AccessoriesPasteProgramManager />
        <Win3Calculator />
        <ClockApp />
        <WriteWin3App />
        <MediaPlayerApp3 songs={songs} setSongs={setSongs} isPlaying={isPlaying} setisPlaying={setisPlaying} audioPlayer={audioPlayer}
        setCurrentSong ={setCurrentSong}/>
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
            <div className="accessoriesIcon" onDoubleClick={MinimizeAccessoriesPaste}>
                <img src={programIcon}/><br />
                <span>Accessories</span>
            </div>
            <div className="gamesIcon">
              <img src={programIcon}/><br/>
              <span>Games</span>
            </div>
            <div className="mainIcon" onDoubleClick={MinimizeMainPaste}>
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

function AccessoriesPasteProgramManager(){
  const arrowDownAccessories = "./src/assets/Win3Icons/PROGM043.png"
  const arrowUpAccessories = "./src/assets/Win3Icons/PROGM046.png"
  const writeApp = "./src/assets/Win3Icons/WRITE001.png"
  const terminalApp = "./src/assets/Win3Icons/TERMI001.png"
  const notePadApp = "./src/assets/Win3Icons/NOTEP001.png"
  const calcApp = "./src/assets/Win3Icons/CALC001.png"
  const clockApp = "./src/assets/Win3Icons/CLOCK001.png"
  const mediaApp = "./src/assets/Win3Icons/MPLAY001.png"
  return(
    <>
      <div className="accessoriesPasteContainer" onMouseDown={AccessoriesPasteMove} onMouseUp={AccessoriesPasteMove} onMouseMove={AccessoriesPasteMove}>
        <div className="accessoriesPasteHeader">
          <button className="exitAccessoriesPaste" onDoubleClick={killAccessoriesPaste}>─</button>
          <button className="arrowDownAccessories" onClick={MinimizeAccessoriesPaste}><img src={arrowDownAccessories} /></button>
          <button className="arrowUpAccessories"><img src={arrowUpAccessories} /></button>
          <h1 className="accessoriesPasteTitle">Accessories</h1>
        </div>
          <div className="writeAccessoriesApp" onDoubleClick={MinimizeWriteApp3}>
            <img src={writeApp} />
            <span>Write</span>
          </div>
          <div className="terminalAccessoriesApp">
            <img src={terminalApp} />
            <span>Terminal</span>
          </div>
          <div className="notePadAccessoriesApp">
            <img src={notePadApp} />
            <span>Notepad</span>
          </div>
          <div className="calcAccessoriesApp" onDoubleClick={Win3MinimizeCalc}>
            <img src={calcApp} />
            <span>Calculator</span>
          </div>
          <div className="clockAccessoriesApp" onDoubleClick={Win3MinimizeClock}>
            <img src={clockApp} />
            <span>Clock</span>
          </div>
          <div className="mediaAccessoriesApp" onDoubleClick={MinimizeMediaPlayerApp3}>
            <img src={mediaApp} />
            <span>Media Player</span>
          </div>
        </div>
    </>
  )
  }

  function MinimizeMediaPlayerApp3() {
    const targetMinimizeMediaPlayer3 = document.querySelector(".mediaPlayerContainer")
    const MinimizeMediaIcon = document.querySelector(".mediaPlayerIcon3")
  
    if (targetMinimizeMediaPlayer3.style.display === 'block') {
      targetMinimizeMediaPlayer3.style.display = 'none'
      MinimizeMediaIcon.style.display = 'block'
    } else {
      targetMinimizeMediaPlayer3.style.display = 'block'
      MinimizeMediaIcon.style.display = 'none'
    }
  }
  


  function MinimizeAccessoriesPaste() {
    const targetMinimizeAccessories = document.querySelector(".accessoriesPasteContainer")
    const MinimizeAccessoriesIcon = document.querySelector(".accessoriesSystemIcon")
  
    if (targetMinimizeAccessories.style.display === 'block') {
      targetMinimizeAccessories.style.display = 'none'
      MinimizeAccessoriesIcon.style.display = 'block'
    } else {
      targetMinimizeAccessories.style.display = 'block'
      MinimizeAccessoriesIcon.style.display = 'none'
    }
  }

  function killAccessoriesPaste() {
    const targetKillPasteA = document.querySelector(".accessoriesPasteContainer")
  
    targetKillPasteA.style.display = 'none'
  }

  function AccessoriesPasteMove(){
  const targetDragWrite = document.querySelector('.accessoriesPasteContainer')
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

  function Win3Calculator(){
    const win3ArrowDownCalc = "./src/assets/Win3Icons/PROGM043.png"

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

    const backspace = () =>{
      setResultado(resultado.slice(0, -1))
    }
    return(
      <>
      <div className="win3CalcContainer" onMouseDown={WIn3CalcMove} onMouseUp={WIn3CalcMove} onMouseMove={WIn3CalcMove}>
        <div className="win3CalcHeader">
        <button className="exitWin3Calc" onDoubleClick={killWin3Calc}>─</button>
        <button className="win3ArrowDownCalc" onClick={Win3MinimizeCalc}><img src={win3ArrowDownCalc} /></button>
          <h1 className="win3CalcTitle">Calculator</h1>
        </div>
        <form>
            <input className="calcResult" type="text" value={resultado} readOnly />
          </form>
          <div className="keyNum3">
            <button className="numOrangeBorder" onClick={clear} id="clear">C</button>
            <button className="numOrangeBorder" onClick={backspace} id="back">Back</button>
            <button name="/" className="numOrangeBorder" onClick={click}>&#47;</button>
            <button name="*" className="numOrangeBorder" onClick={click}>&#42;</button>
            <button name="7" className="numBlueBorder" onClick={click}>7</button>
            <button name="8" className="numBlueBorder" onClick={click}>8</button>
            <button name="9" className="numBlueBorder" onClick={click}>9</button>
            <button name="+" className="numOrangeBorder" onClick={click}>+</button>
            <button name="4" className="numBlueBorder" onClick={click}>4</button>
            <button name="5" className="numBlueBorder" onClick={click}>5</button>
            <button name="6" className="numBlueBorder" onClick={click}>6</button>
            <button name="-"className="numOrangeBorder" onClick={click}>&ndash;</button>
            <button name="1" className="numBlueBorder" onClick={click}>1</button>
            <button name="2" className="numBlueBorder" onClick={click}>2</button>
            <button name="3" className="numBlueBorder" onClick={click}>3</button>
            <button name="." className="numOrangeBorder" onClick={click}>.</button>
            <button name="0" className="numBlueBorder" onClick={click}>0</button>
            <button  className="numOrangeBorder" onClick={calcular} id="result">=</button>
          </div>
      </div>
      </>
    )
  }

  function Win3MinimizeCalc() {
    const targetHideCalc3 = document.querySelector(".win3CalcContainer")
    const MinimizeCalcIcon = document.querySelector(".calculatorIconWin3")
  
    if (targetHideCalc3.style.display === 'block') {
      targetHideCalc3.style.display = 'none'
      MinimizeCalcIcon.style.display = 'block'
    } else {
      targetHideCalc3.style.display = 'block'
      MinimizeCalcIcon.style.display = 'none'
    }
  }

  function killWin3Calc() {
    const targetKillCalc3 = document.querySelector(".win3CalcContainer")
    const KillCalcIcon = document.querySelector(".calculatorIconWin3")

    targetKillCalc3.style.display = 'none'
    KillCalcIcon.style.display = 'none'
  }

  function WIn3CalcMove(){
    const targetDragWrite = document.querySelector('.win3CalcContainer')
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

  function ClockApp() {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
      let time=  new Date().toLocaleTimeString()
      setCurrentTime(time)
    }

    setInterval(updateTime, 1000)

    let date = new Date().toLocaleDateString()
    return(
      <>
      <div className="clockContainer" onMouseUp={WIn3ClockMove} onMouseDown={WIn3ClockMove} onMouseMove={WIn3ClockMove}>
        <div className="clockHeader">
        <button className="exitClockWIn3" onDoubleClick={killWin3Clock}>─</button>
          <h1 className="clockTitle">Clock</h1>
        </div>
        <h1 className="clockTimeDisplay">{currentTime}</h1>
        <h1 className="clockDateDisplay">{date}</h1>
      </div>
      </>
    )
  }

  function WIn3ClockMove(){
    const targetDragWrite = document.querySelector('.clockContainer')
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

  function killWin3Clock() {
    const targetKillClock3 = document.querySelector(".clockContainer")

    targetKillClock3.style.display = 'none'
  }

  function Win3MinimizeClock() {
    const targetHideClock3 = document.querySelector(".clockContainer")
  
    if (targetHideClock3.style.display === 'block') {
      targetHideClock3.style.display = 'none'
    } else {
      targetHideClock3.style.display = 'block'
    }
  }

  function WriteWin3App() {
    const arrowDownWriteWin3App = "./src/assets/Win3Icons/PROGM043.png"
    const arrowUpWriteWin3App = "./src/assets/Win3Icons/PROGM046.png"
    return(
      <>
      <div className="writeWin3Container">
        <div className="writeWin3Header">
        <button className="arrowDownWin3Write" onClick={MinimizeWriteApp3}><img src={arrowDownWriteWin3App}/></button>
        <button className="arrowUpWin3Write"><img src={arrowUpWriteWin3App}/></button>
        <button className="exitWrite3" onDoubleClick={killWriteApp3}>─</button>
          <h1 className="writeWin3Title">Write</h1>
        </div>
        <div className="whiteTargetWrite">
        <li><u>F</u>ile</li>
        <li><u>E</u>dit</li>
        <li><u>D</u>ocument</li>
        </div>
        <textarea className="writeWin3Text"></textarea>
      </div>
      </>
    )
  }

  function MinimizeWriteApp3() {
    const targetMinimizeWrite3 = document.querySelector(".writeWin3Container")
    const MinimizeWriteIcon3 = document.querySelector(".writeIconWin3")
  
    if (targetMinimizeWrite3.style.display === 'block') {
      targetMinimizeWrite3.style.display = 'none'
      MinimizeWriteIcon3.style.display = 'block'
    } else {
      targetMinimizeWrite3.style.display = 'block'
      MinimizeWriteIcon3.style.display = 'none'
    }
  }

  function killWriteApp3() {
    const targetKillWrite3 = document.querySelector(".writeWin3Container")
    const KillWriteIcon3 = document.querySelector(".writeIconWin3")

    targetKillWrite3.style.display = 'none'
    KillWriteIcon3.style.display = 'none'
  }

function MainPasteProgramManager(){
  const fileManager = "./src/assets/Win3Icons/WINFI001.png"
  const MsPropmtManager = "./src/assets/Win3Icons/PROGM010.png"
  const windowsSetupManager = "./src/assets/WIn3Icons/WINSE001.png"
  const ControlPanelManager = "./src/assets/Win3Icons/CONTR001.png"
  const PrintManager = "./src/assets/Win3Icons/WINSE003.png"
  const arrowDownMain = "./src/assets/Win3Icons/PROGM043.png"
  const arrowUpMain = "./src/assets/Win3Icons/PROGM046.png"
  return(
    <>
    <div className="mainProgramMContainer">
      <div className="mainProgramMHeader">
        <button className="exitMainPaste" onDoubleClick={killMainPaste}>─</button>
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
      <div className="controlPanelManagerEXE">
        <img src={ControlPanelManager} /><br/>
        <span>Control Panel</span>
      </div>
      <div className="controlPrintManagerEXE">
        <img src={PrintManager} /><br/>
        <span>Print Manager</span>
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

function killMainPaste() {
  const targetKillPaste = document.querySelector(".mainProgramMContainer")

  targetKillPaste.style.display = 'none'
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
  const prefix = "C:/> "
  return(
    <>
    <div className="prompt" onClick={e=>{MsInputRef.current.focus()}}>
      <input className="MSPrompt" type="text" ref={MsInputRef} value={MsInput} onChange={e => setMsInput(e.target.value)} onKeyDown={e =>{
        if (e.key === "Enter") {
          let newMsOutput = ""
          newMsOutput = MsOutput + "\n" + prefix + MsInput + "\n"
          switch (MsInput){
            case "chkdsk":
              newMsOutput += "\n" + "7862 KB de armazenamento total" + "\n" + "126 KB em 2 arquivos ocultos" + "\n" + "4932 KB em arquivos do usuário"
              + "\n" + "2804 KB livres" + "\n";
              break;
            case "exit":
              promptWindow.style.display = 'none'
              showWindows.style.display = 'block'
              break;
            case "cls":
              newMsOutput += "limpou"
              break;
            default:
              newMsOutput += prefix + "Invalid"
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
