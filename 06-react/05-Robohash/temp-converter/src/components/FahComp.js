export default function FahComp({val, handleChange}){
    return(
        <input onChange={handleChange} class="form-control mt-4" type="text" value={val}/>
      
    )
}