const { default: mongoose } = require("mongoose")
const setError = require("../../config/error")
const Visit = require("../models/visit")


const getAllVisits=async(req,res,next)=>{
    try{
        const allVisits= await Visit.find()
        return res.status(200).json(allVisits)

    }
    catch{return next (setError(400,"can't find visits"))}
}
const getVisitById=async(req,res,next)=>{
    try{
        const {id}=req.params
        const visit=await Visit.findById(id)
        return res.status(200).json(visit)

    }
    catch{return next(setError(400,"can't find this visit for ID"))}
}


const getVisitsByPatient = async (req, res, next) => {
  try {
      const { patientId } = req.params;

      // Verificar que se recibe el patientId
      if (!patientId) {
          return next(setError(400, "patientId is required"));
      }

      console.log('Received patientId:', patientId); // Para depuración

      // Buscar visitas del paciente
      const visitByClient = await Visit.find({ patientId });

      if (!visitByClient || visitByClient.length === 0) {
          return next(setError(404, `No visits found for patientId: ${patientId}`));
      }

      return res.status(200).json(visitByClient);
  } catch (error) {
      console.error('Error fetching visits:', error); // Para depuración
      return next(setError(500, "An error occurred while fetching visits"));
  }
};



// const getVisitsByPatient=async(req,res,next)=>{
//     try{

//       const {patientId}=req.params
//     const visitsByPatient=await Visit.find({patientId})

//      // Verifica si no hay visitas encontradas
//      if (!visitsByPatient || visitsByPatient.length === 0) {
//         return next(setError(404, "No visits found for this patient"));
//       }
//     return   res.status(200).json(visitsByPatient)  
//     }
//     catch{next (setError(400,"error al buscar por paciente su visita"))}
    
    
// }

// const getVisitsByPatient = async (req, res, next) => {
//     try {
//       const { patientId } = req.params;
  
//       // Valida si el patientId es un ObjectId válido
//       if (!mongoose.Types.ObjectId.isValid(patientId)) {
//         return next(setError(400, "Invalid patient ID format"));
//       }
  
//       // Busca las visitas asociadas al patientId
//       const visitsByPatient = await Visit.find({ patientId: mongoose.Types.ObjectId(patientId) });
  
//       // Verifica si no se encontraron visitas
//       if (!visitsByPatient || visitsByPatient.length === 0) {
//         return next(setError(404, "No visits found for this patient"));
//       }
  
//       // Devuelve las visitas encontradas
//       return res.status(200).json(visitsByPatient);
//     } catch (error) {
//       console.error("Error fetching visits by patient:", error); // Log detallado para depuración
//       next(setError(500, "Error fetching visits for this patient"));
//     }
//   };

// const getVisitsByPatient = async (req, res, next) => {
//   try {
//     const { patientId } = req.params;

//     console.log("Patient ID received:", patientId);

//     // Valida el formato del ObjectId
//     if (!mongoose.Types.ObjectId.isValid(patientId)) {
//       console.log("Invalid ObjectId format");
//       return next(setError(400, "Invalid patient ID format"));
//     }

//     // Busca las visitas asociadas al patientId
//     const visitsByPatient = await Visit.find({ patientId: mongoose.Types.ObjectId(patientId) });

//     console.log("Visits found:", visitsByPatient);

//     // Verifica si no se encontraron visitas
//     if (!visitsByPatient || visitsByPatient.length === 0) {
//       console.log("No visits found");
//       return next(setError(404, "No visits found for this patient"));
//     }

//     // Devuelve las visitas encontradas
//     return res.status(200).json(visitsByPatient);
//   } catch (error) {
//     console.error("Error fetching visits by patient:", error);
//     next(setError(500, "Error fetching visits for this patient"));
//   }
// };


const createVisit=async(req,res,next)=>{
    try{
        const newVisit= new Visit(req.body)
        const visitBBDD= await newVisit.save()
        return res.status(201).json(visitBBDD)
        

    }
    catch (error) {
        console.error("Error creating visit:", error); // Muestra el error completo
       
        next(setError(400, "I can't create visit"));
      }
}


module.exports={getAllVisits,getVisitById,getVisitsByPatient,createVisit}