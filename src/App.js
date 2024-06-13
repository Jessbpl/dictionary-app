import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">My dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Cooded by Jessica Bravo</footer>
      </div>
    </div>
  );
}
