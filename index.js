console.log("en marcha vamos por el ultimos de back");
const express = require("express");
const connectDB = require("./src/config/db");
const setError = require("./src/config/error");
require("dotenv").config();
const app = express();
const PORT = 5001;
connectDB();
app.use("/api/v1", (req, res, next) => {
  return res.status(200).json("funciona");
});
app.use("*", (req, res, next) => {
  return next(
    setError(
      404,
      "no tengo nada concreto que ofrecer, esta ruta es inespecifica"
    )
  );
});
app.use((error,req,res,next)=>{
    return res.status(500).json("internal serve error")
})


app.listen(PORT, () => {
  console.log(`en marcha y conectado a http://localhost.${PORT} `);
});
