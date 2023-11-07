const express=require("express");
const {getArticles}=require("./controllers/articlesController")

const {router}=require("./routes/usersRouter")

const app=express();

app.use(express.json());

app.get("/",getArticles )
app.use("/api/v1/users",router)
app.listen(3000)
