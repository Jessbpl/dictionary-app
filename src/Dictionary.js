import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  //I want to have a boolean to track if the page has been loaded or not. Its going to have a false by default bc the page hasn´t been loaded the first time  that has been rendered. So now we have to create a condition
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePicResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    const apiKey = `eb214ccaa33987f7248o49846e082tab`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    // console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    const picApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}}&key=${apiKey}`;
    axios.get(picApiUrl).then(handlePicResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    //documentation https://www.shecodes.io/learn/apis/dictionary
    // console.log(event);
    setKeyWord(event.target.value);
  }

  //what loaded (at the bottom) is going to do is setLoaded to true (so now we can say it´s been loaded) but also is going to search
  function load() {
    setLoaded(true);
    search();
  }

  //if it has been loaded i want to show what´s inside the return
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What word would you like to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            placeholder="Please type a word"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <div className="hint">Example: friendship, joke, wish... </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    //but if hasn´t been loaded yet if (it is the first time this page is being rendered) and i am going to return "Loading..."
    load();
    return "Loading";
  }
}

//Ideally, we want the page to load a word when the dictionary loads. I want the dictionary to load something on default. If i create a new state (loaded, setLoaded) to track if it has loaded something or not (it´s the first time it has loaded something), bc loaded by default is false. So then what i do is i say if its loaded show the form but if not i want to call the function Load wich is changing the state to true but i also wan to search so im calling search but not receiving results. now i need a new keyword (on the keyword state) so this word is being loaded by default.
//A better approach is to send all of this from an outside component. So now we are going to work on the app.js component
