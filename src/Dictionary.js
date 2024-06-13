import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.meanings.definition);

    setResults(response.data);
  }

  function search(event) {
    //documentation https://www.shecodes.io/learn/apis/dictionary
    console.log(event);
    setKeyWord(event.target.value);
  }
  function handleKeyWordUpdate(event) {
    event.preventDefault();
    const apiKey = `eb214ccaa33987f7248o49846e082tab`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleKeyWordUpdate}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Type a word"
          onChange={search}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
