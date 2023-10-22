let fs =require("fs")
console.log("Start------")
// let data=fs.readFileSync("./users.json","utf-8")
// console.log(data)
let user={
    id:12,
    name:"Mohammed",
    age:100
}

fs.readFile("./users.json","utf-8",(err,d)=>{
    console.log("Reading------")
    if(err) return console.log(err)
    let users=JSON.parse(d)
users.push(user)
    console.log(users)
    fs.writeFile("/users.json",JSON.stringify(users),(err)=>{
        console.log(err)
    })

})




console.log("End--------")