const jwt=require('jsonwebtoken');
const varify=(req,res,next)=>{
    const token =req.body.token || req.query.token || req.header['x-acess-token'];

    if(!token){
        return res.status(403).send("a token is need for authentication")
    }
    try{
        const decoded=jwt.varify(token,process.env.TOKEN_KEY);
        req.user=decoded
    }catch(err) {
        return res.status(401).send("invalid token")
    }
    return next()
}
module.exports=varify;