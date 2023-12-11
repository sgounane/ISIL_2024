export default function Card({data}){
    //console.log(data)
    return(
        <div className="card">
            <img src={data.image}/>
            <h3>{data.nom}</h3>
            <h5>{data.email}</h5>
        </div>)
}