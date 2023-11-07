let {multiply,add}=require("./mymodule")
let RandomAge=require("monmodule")

let a=15, c=23;
console.log(add(a,c))

let ra=new RandomAge(4,120)

console.log("Max:",ra.maxage, "minage:",ra.minage, "age: ",ra.getAge())
