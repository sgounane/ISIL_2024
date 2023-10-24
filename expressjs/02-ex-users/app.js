let users=require("./users.json");
const express=require("express")
const fs=require("fs")

const app=express()
app.use(express.json());

app.get("/users",(req,res)=>{
    res.send({success:true, data:users})
})

app.get("/users/:id",(req,res)=>{
    let a=users.find(item=>item.id==req.params.id)
    if(a) res.send({suscess: true, data: a});
    else res.status(404).send({success:false, message:"User not found"})
})

app.post("/users",(req,res)=>{
    if(users.find(e=>e.id==req.body.id)) res.status(404).send({success:false, message:"User Exists"})
    else{
        users.push(req.body)
        fs.writeFile("./users.json",JSON.stringify(users),(err)=>{
            if (err) res.status(500).send({success:false, message:"Server ERROR"})
            else res.send({success:true, data:req.body})
        })
        
}
   
})

app.listen(3000)