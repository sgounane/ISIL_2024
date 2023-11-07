const router=require("express").Router();
const {getUsers}=require("../controllers/usersController")

router.get("/",getUsers)

module.exports={router}