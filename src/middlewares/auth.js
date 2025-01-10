const { verify } = require("jsonwebtoken")
const setError = require("../config/error")
const User = require("../api/models/user")
const { verifyJwt } = require("../config/jwt")


const isAuth=async(req,res,next)=>{
    try{
        const token=req.headers.authorization
        if(!token){
            return next (setError(400,"you don't have the key token"))
        }
        const parsedToken=token.replace("Bearer ","")
        const validToken=verifyJwt(parsedToken)
        const userLogged=await User.findById(validToken.id)
        userLogged.password=null
        req.user=userLogged
        next()
        

    }

    catch(error){ return next(setError(400),"la llave no era la correcta")

    }

}

module.exports=isAuth