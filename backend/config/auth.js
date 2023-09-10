const jwt=require('jsonwebtoken');
const Varify=(req,res,next)=>{
    let token =req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        const decoded=jwt.verify(token,process.env.TOKEN_KEY,(error,sucess)=>{
            if(error){
                return res.status(401).send("invalid token")
            }else{
                return next()
            }
        });

        req.user=decoded
    }
    else{
        res.status(403).send("please add token")
    }

}
module.exports=Varify;