const http =require("http")
const url=require("url")
const querys=require("querystring")
console.log(querys)
const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json")
    const q=url.parse(req.url)
    console.log(q)
    res.end(JSON.stringify(q))

})

server.listen(3000)