const fs=require("fs");
const request=require("request")
request("https://jsonplaceholder.typicode.com/todos",(err,res,body)=>{
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
        let str="";
        body.forEach(e => {
            let line=""
            for(k in e )
                line+=e[k]+","
            line=line.substring(0,line.length-1)+"\n"
            str+=line
        });
        fs.writeFile("todos.csv",str, (err)=>{})
    }catch(e){
        console.log("Parsing Json ERROR")
    }
})