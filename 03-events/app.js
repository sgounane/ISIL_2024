let http=require("http")

let server=http.createServer()

let users=[{
    id:1,
    name:"said"
}]
server.on("request",(req,res)=>{
    console.log(req.url)
    if(req.url=="/users") res.end(JSON.stringify(users))
    else res.end("not found")
})

server.listen(3000)