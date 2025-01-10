const { register, login, getAllUsers } = require("../controllers/user");

const userRoutes = require("express").Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/users",getAllUsers)

module.exports = userRoutes;
