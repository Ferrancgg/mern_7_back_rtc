const setError = require("../../config/error")
const { generateSing } = require("../../config/jwt")
const User = require("../models/user")
const bcrypt=require("bcrypt")

const register=async(req,res,next)=>{
    try{
        console.log("he llegado a controller")
        const newUser= new User(req.body)
        const userDuplicated=await User.findOne({username:req.body.username})
        if(userDuplicated){
            return  next(setError(400,"this user already exists"))
            
        }


        const user= await newUser.save()
        return res.status(201).json(user)
        

    }
    
    catch(error){console.log(error)
        return  next(setError(400,"can't register"))
    }

}
const login=async(req,res,next)=>{
    try{
        const user=await User.findOne({username:req.body.username})
        if(!user){ 
            return next (setError(400,"user don't exist"))

        }if(bcrypt.compareSync(req.body.password, user.password)){
            const token=generateSing(user._id)
            return res.status(200).json({user, token})

        }
        else{ return next(setError(400,"password don't match"))}

      

    }
    catch{ return next (setError(400,"you can't login"))
        

    }

}
const getAllUsers=async(req,res,next)=>{

    try{
         const users=await User.find()
         return res.status(200).json(users)

    }
    catch{
        return next(setError(400,"I can't return All users"))
    }

}

module.exports={register,login,getAllUsers}