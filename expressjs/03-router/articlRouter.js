const router=require("express").Router()
const {getArticls,getArticl}=require("./articlsController")

router.get('/',getArticls)
router.get('/:id',getArticl)

module.exports=router;