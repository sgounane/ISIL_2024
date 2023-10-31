const express=require('express')
const jwt=require("jsonwebtoken")

const app=express()

app.use(express.json())

const TOKEN_SECRET="un secret"

app.post('/login', (req, res) => {
    //console.log(req.body)
    const token=jwt.sign({ 
        user: req.body.user,
        score: req.body.score
        }, 
        TOKEN_SECRET, 
        { expiresIn: '24h' }
    );
  res.json(token);
});

app.get("/profile",(req,res)=>{
    const token=req.header("Authorization");
    jwt.verify(token,TOKEN_SECRET,(err,data)=>{
        if(err) res.status(401).send("Not Authorized")
        res.send(data)
    })
})
app.listen(3000)
