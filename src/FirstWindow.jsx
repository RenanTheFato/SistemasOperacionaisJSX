import { useState } from "react";
import "./styles/FirstWindow.css";
import Windows1 from "./Windows1";
import Header from "./Header"
import Windows2 from "./Windows2"

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
    </div>
  );
  function Paragraph({ text }) {
    return (
      <div>
        <p className="textOS">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
          exercitationem reiciendis earum, deserunt laboriosam, suscipit nemo
          tempora a fugit quisquam eveniet obcaecati, maiores eum? Beatae ex
          explicabo rem harum. Quia.
        </p>
        <button><a href="/Windows1">WIN1</a></button>
        <button><a href="/Windows2">WIN2</a></button>
      </div>
    );
  }
}

export default FirstWindow;
