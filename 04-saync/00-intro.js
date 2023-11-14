const fs=require("fs");
console.log("start")

fs.readFile("app.js","utf-8",(err,data)=>{
    console.log("End read file");
    setTimeout(() => {
        fs.readFile("app.js","utf-8",(err,data)=>{
            console.log("data!!");
        })
    },1000);
})

console.log("end")