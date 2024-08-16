import { Router } from "express"; // const router = require('express').Router();
import {
  Pong,
  actualizandoUnaTarea,
  actualizarUnCampo,
  creandoUnaTarea,
  eliminandoUnaTarea,
  obteniendoTareas,
  obteniendoUnaTarea,
} from "../controller/tasks.controller.js";

const router = Router();

//      Rutas para el CRUD de Tareas

//  Prueba para verificar la conexión a la base de datos
router.get("/ping", Pong);

//  Obtener todas las Tareas
router.get("/tasks", obteniendoTareas);

//  Obtener una sola Tarea
router.get("/tasks/:id", obteniendoUnaTarea);

//  Crear una Tarea
router.post("/tasks", creandoUnaTarea);

//  Actualizar todos los campos de una Tarea
router.put("/tasks/:id", actualizandoUnaTarea);

//  Actualizar un campo en especifico de una Tarea
router.patch("/tasks/:id", actualizarUnCampo);

//  Eliminar una Tarea
router.delete("/tasks/:id", eliminandoUnaTarea);

export default router;