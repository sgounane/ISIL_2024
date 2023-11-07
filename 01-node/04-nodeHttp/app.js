const http=require("http");
const fs=require("fs")

const server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==="/" || req.url==="/index.html"){
            fs.readFile("index.html","utf-8",(err,data)=>{
            if(err) {
                res.writeHead(500)
            }
            else{
                res.writeHead(200)
                res.write(data)
                res.end()
            }
        });
        
    }
    else if(req.url==="/style.css"){


    }
    else{
        
            fs.readFile("pnf.html","utf-8",(err,data)=>{
            if(err) {
                res.writeHead(500)
            }
            else{
                res.writeHead(404)
                res.write(data)
                res.end()
            }
        });
    }
    
})

server.listen(3000);