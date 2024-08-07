const router = require('express').Router();
const { Pong, obteniendoTareas, obteniendoUnaTarea, creandoUnaTarea, actualizandoUnaTarea, actualizarUnCampo, eliminandoUnaTarea,  } = require('../controller/tasks.controller');


//      Rutas para el CRUD de Tareas


//  Prueba para verificar la conexión a la base de datos
router.get("/ping", Pong);

//  Obtener todas las Tareas
router.get("/tasks", obteniendoTareas);

//  Obtener una sola Tarea
router.get("/task/:id", obteniendoUnaTarea);

//  Crear una Tarea
router.post("/task", creandoUnaTarea);

//  Actualizar todos los campos de una Tarea
router.put("/task/:id", actualizandoUnaTarea);

//  Actualizar un campo en especifico de una Tarea
router.patch("/task/:id", actualizarUnCampo);

//  Eliminar una Tarea
router.delete("/task/:id", eliminandoUnaTarea);


module.exports = router;