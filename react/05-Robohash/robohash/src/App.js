import { useState } from "react";
import Card from "./Card.js"
import Search from "./Search.js"
import robots from "./db.js"
import "./App.css"
function App() {
  const [elements, setElements]=useState(robots);
  const [color, setColor]=useState("orange");
  let changeHandler=(e)=>{
     setElements(robots.filter(c=> c.nom.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
  <div className="container"  style={{backgroundColor: color}}>
    <Search handleChange={changeHandler} handleColorChange={(e)=>setColor(e.target.value)}/>
    <div className="cardList">
      {elements.map(e=><Card  data={e} key={e.id}/>)}
    </div>
    </div>
  );
}
export default App;
