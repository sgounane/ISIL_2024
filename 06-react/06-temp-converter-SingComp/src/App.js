import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// (C × 9/5) + 32 = F
function App() {
  const [error, setError]= useState(false);
  const [celsius, setCelius]= useState(0);
  const [fahrenhiet, setFahrenhiet]= useState(32);

  function fah2cel(e){
    const fah=e.target.value
    let cel=(fah-32)*5/9;
    setFahrenhiet(fah)
    setCelius(fah===""?"":cel)
  }

  function cel2fah(e){
    const cel=e.target.value

    if(!isNaN(cel)  || cel===""){
        let fah=32+cel*9/5;
        setCelius(cel)
        setFahrenhiet(cel===""?"":fah)
        setError(false)
    }else{
        setError(true);
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 border p-4 m-4 bg-info">
        <h2>C/F Converter</h2>
        {error && <div class="alert alert-danger"> Invalid input ...</div>}
        <input onChange={cel2fah} class="form-control mt-4" type="text" value={celsius}/>
        <input onChange={fah2cel} class="form-control mt-4" type="text" value={fahrenhiet}/>
      </div>
      <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
