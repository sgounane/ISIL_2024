const express=require("express");
const {direBonjour,auth}=require("./mdlwrs")
const bodyParser=require("body-parser")

const app =express();

app.use(direBonjour);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post("/user",(req,res)=>{
    res.send(req.body)
})
app.get("/user/:name/:score",auth, (req,res)=>{
    res.send(`Bonjour ${req.user.name}`);
})
app.get("/",(req,res)=>{
    res.send(`Bonjour ${req.user}`);
})

app.use((req,res,next)=>{
    //console.log(err)
    res.send("Not FOUND")
})
app.listen(3000);