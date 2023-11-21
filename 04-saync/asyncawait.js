const fs=require("fs").promises
const axios=require("axios");
(async ()=>{
    try{

        let res= await axios.get("https://jsonplaceholder.typicode.com/todos")
        await fs.writeFile("data.json",JSON.stringify(res.data))
    }catch(e){
        console.log("Error");
    }

   //console.log(res.status,d)
})()

console.log("Fin!!!")