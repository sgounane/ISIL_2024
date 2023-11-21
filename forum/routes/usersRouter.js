
const {Router}=require("express")
const User=require("../models/User");

const router=Router();
router.get("/",async (req,res)=>{
    let users=await User.find();
    console.log(users);
    res.send(users)
})

module.exports=router
