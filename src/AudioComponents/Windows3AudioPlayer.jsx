import { useEffect, useState, useRef } from "react";
import { songsdata } from "../songs";

function MediaPlayerApp3({isPlaying, setisPlaying, songs}) {
    const [currentSong, setCurrentSong] = useState(songsdata[0])
    const audioPlayer = useRef()
    const clickRef = useRef()
    useEffect(() => {
        if (isPlaying) {
          audioPlayer.current.play()
        } else {
          audioPlayer.current.pause()
        }
      },[isPlaying])
    
    const PlayPause = () =>{
        setisPlaying(!isPlaying)
    }

    const onPlaying = () =>{
        const duration = audioPlayer.current.duration
        const ct = audioPlayer.current.currentTime

        setCurrentSong({... currentSong, "progress": ct/duration * 100 , "length": duration})
    }

    const checkTime = (e) =>{
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX

        const divprogress = offset / width * 100
        audioPlayer.current.currentTime = divprogress / 100 * currentSong.length
    }

    const skipBack = () =>{
        const index = songs.findIndex(x => x.title == currentSong.title)
        if (index == 0) {
            setCurrentSong(songs[songs.length - 1])
        } else{
            setCurrentSong(songs[index - 1])
        }

        audioPlayer.current.currentTime = 0
    }
    const skipNext = () =>{
        const index = songs.findIndex(x => x.title == currentSong.title)
        if (index == songs.length - 1) {
            setCurrentSong(songs[0])
        } else{
            setCurrentSong(songs[index + 1])
        }

        audioPlayer.current.currentTime = 0
    }

    const win3ArrowDownMedia = "./src/assets/Win3Icons/PROGM043.png"

    function killWin3Media() {
      const targetKillMediaPlayer3 = document.querySelector(".mediaPlayerContainer")
      const MinimizeKillIcon = document.querySelector(".mediaPlayerIcon3")
    
      targetKillMediaPlayer3.style.display = 'none'
      MinimizeKillIcon.style.display = 'none'
      audioPlayer.current.pause()
    }
    return(
        <>
        <div className="mediaPlayerContainer" onMouseDown={WIn3MediaMove} onMouseMove={WIn3MediaMove} onMouseUp={WIn3MediaMove}>
          <div className="mediaPlayerHeader">
          <button className="exitMediaWin3" onDoubleClick={killWin3Media}>─</button>
          <button className="win3ArrowDownMedia" onClick={MinimizeMediaPlayerApp3B}><img src={win3ArrowDownMedia} /></button>
            <h1 className="mediaPlayerTitle">Media Player - {currentSong.title}.mp3</h1>
          </div>
          <audio src={currentSong.url} ref={audioPlayer} onTimeUpdate={onPlaying} />
          <div className="progressBar" onClick={checkTime} ref={clickRef}>
            <button className="progress" style={{width: `${currentSong.progress + "%"}`}}></button>
          </div>
          <div className="mediaPlayerControls">
            <button id="play" onClick={PlayPause}>⏵</button>
            <button id="pause" onClick={PlayPause}>⏸</button>
            <button id="stop" onClick={PlayPause}>⏹</button>
            <button id="forward" onClick={skipNext}>»</button>
            <button id="backard" onClick={skipBack}>«</button>
          </div>
        </div>
        </>
      )
}

function MinimizeMediaPlayerApp3B() {
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

function WIn3MediaMove(){
  const targetDragWrite = document.querySelector('.mediaPlayerContainer')
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

export default MediaPlayerApp3;