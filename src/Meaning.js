import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <p>
        <h3> {props.meaning.partOfSpeech}</h3>
        <div>
          <p>{props.meaning.definition}</p>
        </div>
        <strong>Example: </strong>
        <em>{props.meaning.example}</em>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
