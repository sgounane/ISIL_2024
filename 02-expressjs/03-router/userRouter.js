const router=require("express").Router()

router.get('/',(req,res)=>{
    res.send("Users List")
})

router.get('/:id',(req,res)=>{
    res.send("User "+req.params.id)
})

module.exports=router;