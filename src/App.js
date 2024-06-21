import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My dictionary</header>
        <main>
          <Dictionary defaultKeyword="howdy" />
        </main>
        <footer className="App-footer">Cooded by Jessica Bravo</footer>
      </div>
    </div>
  );
}
//What we do is to work on the <Dictionary>, so we define the defaultKeyword="life" and then we go to the Dictionary component and we say that function Dictionary (props) is going to have acces to props and then we change the state let [keyword, setKeyword]=useState(props.defaultKeyword); because that what we are sending from the outside component App.js.
