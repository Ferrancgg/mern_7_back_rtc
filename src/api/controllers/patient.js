const { default: mongoose, model } = require("mongoose")
const setError = require("../../config/error")
const Patient = require("../models/patient")

const getAllPatient=async(req,res,next)=>{
    try{
        const allPatients=await Patient.find()
        return res.status(200).json(allPatients)
        
    }
    catch{
        return next (setError(400,"can't find patient"))
        
    }

}
const getPatientById=async(req,res,next)=>{
    try{
        const {id}=req.params
        const patientById= await Patient.findById(id)
        return res.status(200).json(patientById)
        
    }
    catch{
        return next (setError(400,"can't find this patient"))
        
    }

}
const createPatient=async(req,res,next)=>{
    try{
       const newPatient=new Patient(req.params)
        const patientBD= await newPatient.save()
        return res.status(201).json(patientBD)
        
    }
    catch{
        return next (setError(400,"can't create this patient"))
        
    }

}
const deletePatient=async(req,res,next)=>{
    try{
        const {id}=req.params
        const patientDelete=await Patient.findByIdAndDelete(id)
        return res.status(200).json(patientDelete)

      
        
    }
    catch{
        return next (setError(400,"can't delete this patient"))
        
    }

}
const updatePatient=async(req,res,next)=>{
    try{
         const{id}=req.params
    const oldPatient= Patient.findById(id)
    const newPatient=new Patient(req.body)
    newPatient._id=id
    const patientUpdated= await Patient.findByIdAndUpdate(id,newPatient,{new:true})
    
    }
    catch{ return next (setError(400,"I can't updated this client"))}
   

}

module.exports={getAllPatient,getPatientById,createPatient,deletePatient,updatePatient}