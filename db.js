const {createPool} = require('mysql2/promise'); //desestructuramos createPool del modulo mysql2
require('dotenv').config(); //importamos dotenv para el uso de variables de entorno 

//Creamos la conexión a la base de datos mysql
const connection_db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

//exportamos la conexión
module.exports = {connection_db};