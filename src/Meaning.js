import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <p>
        <h3> {props.meaning.partOfSpeech}</h3>
        <div className="definition">
          <p>{props.meaning.definition}</p>
        </div>
        <div className="example">
          <strong>Example: </strong>
          <em>{props.meaning.example}</em>
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
