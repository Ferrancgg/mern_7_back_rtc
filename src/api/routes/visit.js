const { getAllVisits, createVisit, getVisitById, getVisitByPatient, getVisitsByPatient } = require("../controllers/visit")

const visitRouters=require("express").Router()

visitRouters.get("/",getAllVisits)
visitRouters.post("/",createVisit)
visitRouters.get("/:id",getVisitById)
visitRouters.get("/:patientId",getVisitsByPatient)




module.exports=visitRouters