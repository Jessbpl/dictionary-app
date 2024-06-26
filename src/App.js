import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My dictionary</header>
        <main>
          <Dictionary defaultKeyword="friend" />
        </main>
        <footer className="App-footer">
          This project has been coded by{" "}
          <a href="https://github.com/Jessbpl" target="_blank" rel="noreferrer">
            Jessica Bravo
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/Jessbpl/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
//What we do is to work on the <Dictionary>, so we define the defaultKeyword="life" and then we go to the Dictionary component and we say that function Dictionary (props) is going to have acces to props and then we change the state let [keyword, setKeyword]=useState(props.defaultKeyword); because that what we are sending from the outside component App.js.
