console.log("en marcha vamos por el ultimos de back");
const express = require("express");
const connectDB = require("./src/config/db");
const setError = require("./src/config/error");
const indexRoutes = require("./src/api/routes/indexRoutes");
// const indexRouter = require("./src/api/routes/indexRouter");
require("dotenv").config();
const app = express();
app.use(express.json())
const PORT = 5001;
connectDB();


app.use("/api/v1",indexRoutes )
app.use("*", (req, res, next) => {
  return next(
    setError(
      404,
      "no tengo nada concreto que ofrecer, esta ruta es inespecifica"
    )
  );
});
app.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || "Internal server error");
  });
  
app.listen(PORT, () => {
  console.log(`en marcha y conectado a http://localhost.${PORT}`);
});
