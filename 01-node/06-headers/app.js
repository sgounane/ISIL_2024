const http =require("http")

const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json")
    res.setHeader("nom","gounane")
    let ua=req.headers["user-agent"]
    const data={
        user_agent: ua,
        name:"Marbouhi",
        age:24,
        notes:{
            math:16,
            info:17
        }
    }
    res.end(JSON.stringify(data))
})

server.listen(3000)