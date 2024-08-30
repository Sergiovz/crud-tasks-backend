//importamos los modulos requeridos
import cors from "cors";
import "dotenv/config"; // require('dotenv').config();
import helmet from "helmet"; // const helmet = require('helmet');
import morgan from "morgan"; // const morgan = require('morgan');
import router from "./src/router/tasks.router.js";
import express from "express"; // const express = require('express');
import { Pool } from "./db.js";

//inicializamos la aplicación
const app = express();

//inicializamos el puerto del servidor
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

//router
app.use("/api", router);

//Error 404
app.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

//Arranque del Servidor
app.listen(port, () => {
  Pool, console.log(`Server running on port http://localhost:${port}`);
});
