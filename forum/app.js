
const express=require("express");
const mongoose=require("mongoose");
const userRouter=require("./routes/usersRouter")

let app=express();

const uri="mongodb://localhost:27017/isil";

(async ()=>{
    await mongoose.connect(uri)
    console.log("Connected to db")
})()

app.use("/users",userRouter)



app.listen(3000)