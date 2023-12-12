export default function CelComp({val, handleChange}){
    return(
        <input onChange={handleChange} class="form-control mt-4" type="text" value={val}/>
    )
}