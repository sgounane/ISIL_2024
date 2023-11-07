const express=require("express")

const app=express()

app.get("/",(req, res)=>{
    res.send("Home")
})
app.get("/users",(req, res)=>{
    res.send("Users List")
})

app.post("/users/:id",(req, res)=>{
    res.send(`User${req.params.id} created`)
})
app.use((err,req,res)=>{
    req.status(404).send("Page not fount")
})

app.listen(3000, ()=>console.log("Listening on port 3000"))