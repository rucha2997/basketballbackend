const authorizationMiddleware =(req,res,next) =>{
    if(req.user){
        next();
        return;
    }

    res.status(403).send("");
}

module.exports = authorizationMiddleware;