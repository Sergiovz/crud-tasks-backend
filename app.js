//importamos los modulos requeridos
import express from 'express'; // const express = require('express');
import morgan from 'morgan'; // const morgan = require('morgan');
import helmet from 'helmet'; // const helmet = require('helmet');
import 'dotenv/config'; // require('dotenv').config();
import router from './src/router/tasks.router.js'
//inicializamos la aplicación
const app = express();

//inicializamos el puerto del servidor
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

//router
app.use('/api', router );

//Error 404
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route Not Found"
    });

    next();
})

//Arranque del Servidor
app.listen(port, () => { console.log(`Server running on port http://localhost:${port}`)});