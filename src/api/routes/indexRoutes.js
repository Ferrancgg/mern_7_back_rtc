const userRoutes = require("./user");
const indexRoutes = require("express").Router();

indexRoutes.use("/users",userRoutes)

module.exports=indexRoutes