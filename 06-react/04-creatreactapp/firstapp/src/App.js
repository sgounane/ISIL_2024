import {useState} from "react"
import Input from "./components/input";
import Output from "./components/output"
import './App.css';

function App() {
  let [text,setText]=useState("Bonjour");
  return (
    <div className="App">
      <header className="App-header">
        <Input/>
        <Output onclick={(a,b)=>a+b} text="salut tous"/>
      </header>
    </div>
  );
}

export default App;
