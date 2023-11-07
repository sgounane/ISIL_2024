function direBonjour(req,res,next){
    console.log(`${Date()}: Bonjour`);
    next();
}

function auth(req,res,next){
   req.user={name:req.params.name,score:req.params.score};
    next();
}


module.exports={direBonjour, auth};