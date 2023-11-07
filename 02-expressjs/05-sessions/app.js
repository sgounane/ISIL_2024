const express=require("express");
const session=require("express-session");

const app=express();

app.use(session({
    secret:"Un secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.json());



app.post("/login",(req,res)=>{
    //if(req.body.user==="admin" && req.body.password==="123") 
    req.session.user= req.body.user
    res.send(req.body)
})

app.get("/profile",(req,res)=>{
    console.log(req.headers)
    if(req.session.user)res.send(`Bonjour ${req.session.user}`)
    else res.status(401).send("Not autorised")
})

app.listen(3000)
