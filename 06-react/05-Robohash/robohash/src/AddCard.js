import { useState } from "react"

export default function AddCard({handleAddCard}){

    const [nom, setNom]=useState("")
    const [email, setEmail]=useState("")

    function submitHandler(e){
        handleAddCard(e,{nom,email})
    }
    return(
        <form onSubmit={submitHandler} className="addcard">
            <div>
                <input type="text" onChange={(e)=>setNom(e.target.value)} placeholder="Nom"/>
            </div>
            <div>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email@email.ma"/>
            </div>
            <input type="submit" value="Save"/>
            
        </form>
    )
}