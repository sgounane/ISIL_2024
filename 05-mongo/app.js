const MongoClient=require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId; 
const express=require("express");

const app=express();

app.use(express.json());

const uri="mongodb://localhost:27017"

const client=new MongoClient(uri);
let db;
(async ()=>{
	try{
		await client.connect();
		db=client.db("isil");
		console.log("Connected ....")
	}catch(e){
		console.log("error ...")
	}
})()

app.get("/users",async (req,res)=>{
	let uc=db.collection("users");
	let users=await uc.find().toArray();
	res.send(users)
})

app.get("/users/id/:id",async (req,res)=>{
	let uc=db.collection("users");
	let user=await uc.findOne({_id: new ObjectId(req.params.id)});
	console.log(user)
	res.send(user)
})

app.get("/users/:name",async (req,res)=>{
	let uc=db.collection("users");
	let user=await uc.findOne({username: req.params.name});
	console.log(user)
	res.send(user)
})

app.post("/users",(req,res)=>{
	let uc=db.collection("users");
	uc.insertOne(req.body)
	res.send(req.body)
})

app.put("/users/:name",(req,res)=>{
	let uc=db.collection("users");
	uc.updateOne({username:req.params.name},{$set: {age:req.body.age, moyenne: 12}})
	res.send(req.body)
})

app.delete("/users/:name",(req,res)=>{
	let uc=db.collection("users");
	uc.deleteOne({username:req.params.name})
	res.send(req.body)
})

app.listen(3000, ()=>console.log("Running on port 3000"))