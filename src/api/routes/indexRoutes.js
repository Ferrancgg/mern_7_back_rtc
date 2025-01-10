const userRoutes = require("./user");
const visitRouters = require("./visit");
const indexRoutes = require("express").Router();

indexRoutes.use("/users",userRoutes)
indexRoutes.use("/visit",visitRouters)


module.exports=indexRoutes