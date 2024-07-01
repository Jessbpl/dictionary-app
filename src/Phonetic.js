import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  let url = `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${props.word}--_gb_1.mp3`;
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <h2> /{props.phonetic}/ </h2>
        <p className="audio-player">
          {" "}
          <ReactAudioPlayer
            src={url}
            controls
            className="audio-player-element"
          />
        </p>
      </div>
    );
  } else {
    return null;
  }
}
