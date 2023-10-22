const fs=require("fs");
const src="source.txt";
const dist="distination.txt";

fs.readFile(src,"utf-8",(err,data)=>{
    if(err) console.log(err);
    else{
        fs.writeFile(dist,data.toUpperCase(),"utf-8",(err)=>{
           if(err) console.log(err)
        })
    }
})
