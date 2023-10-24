const express=require("express")
const userRouter=require("./userRouter")
const articlRouter=require("./articlRouter")

const app=express();

app.get("/",(req,res)=>{
    res.send("Home");
})

app.use("/users",userRouter)
app.use("/articls",articlRouter)


app.listen(3000)