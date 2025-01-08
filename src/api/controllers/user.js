const setError = require("../../config/error")
const User = require("../models/user")

const register=async(req,res,next)=>{
    try{
        console.log("he llegado a controller")
        const newUser= new User(req.body)
        const user= await newUser.save()
        return res.status(201).json(user)
        

    }
    
    catch(error){console.log(error)
        return  next(setError(400,"can't register"))
    }

}
const login=async(req,res,next)=>{
    try{
      

    }
    catch(error){

    }

}

module.exports={register,login}