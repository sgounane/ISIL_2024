const fs=require("fs");
const request=require("request")
request("https://google.com",(err,res,body)=>{
    if(err){
        console.log(err);
        return;
    }
    if(res.statusCode!==200){
        console.log(res.statusCode);
        return;
    }
    try{
        body=JSON.parse(body);


        
    }catch(e){
        console.log("Parsing Json ERROR")
    }
})