//importamos los modulos requeridos
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

//inicializamos la aplicación
const app = express();

//inicializamos el puerto del servidor
const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

//router
app.use('/api', require('./src/router/tasks.router'));

//Error 404
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route Not Found"
    });

    next();
})

//Arranque del Servidor
app.listen(port, () => { console.log(`Server running on port http://localhost:${port}`)});