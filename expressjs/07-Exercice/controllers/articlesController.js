let articles=require("../data/article.json");

function getArticles(req,res){
    res.send(articles);
}

module.exports={getArticles}