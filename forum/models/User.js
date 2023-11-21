const {model, Schema} =require("mongoose")

let user=new Schema({
    name: String,
    password: String
});

let User=model("User", user)

module.exports=User;