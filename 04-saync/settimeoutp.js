function setto(t, f){
    let p=new Promise((res,rej)=>{
        if(t>0) res({f,t})
        else rej("Error")
    })
    return p;
}

let a=setto(2000,()=>console.log("OK"))
a.then((d)=> setTimeout(d.f,d.t)).catch(d=>console.log(d))