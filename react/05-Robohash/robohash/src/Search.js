let stl={border:"1px solid gray", padding:"10px"}
export default function Search({handleChange, handleColorChange}){

    return (
        <div className="searche">
      <input type="text" placeholder="Searche" onChange={handleChange}/>
      <input type="color" onChange={handleColorChange} />
      
    </div>
    )
}