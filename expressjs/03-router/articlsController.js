function getArticls(req,res){
    res.send("Articls List")
}

function getArticl(req,res){
    res.send("Articls "+req.params.id)
}

module.exports={
    getArticls,
    getArticl
}
