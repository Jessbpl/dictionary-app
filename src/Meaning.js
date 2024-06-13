import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <h3> {props.meaning.partOfSpeech}</h3>
      <div>
        <p>{props.meaning.definition}</p>
      </div>
      <em>{props.meaning.example}</em>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
