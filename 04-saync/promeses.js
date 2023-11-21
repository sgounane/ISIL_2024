const fs=require("fs").promises
const axios=require("axios")

axios.get("https://jsonplaceholder.typicode.com/todos")
.then((d)=>{
    return fs.writeFile("todos.json",JSON.stringify(d.data))
})
.then(()=>{
    return axios("https://jsonplaceholder.typicode.com/todos")
})
.then((d)=>console.log(d.status))
.catch(e=>console.log("e"))