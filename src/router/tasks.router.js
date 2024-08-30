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
import { validacionesTasks } from "../controller/validacionesTasks.js";
import { validacionDeError } from "../../Middleware/validacionDeError.js";

const router = Router();

//      Rutas para el CRUD de Tareas

//  Prueba para verificar la conexión a la base de datos
router.get("/ping", Pong);

//  Obtener todas las Tareas
router.get("/tasks", obteniendoTareas);

//  Obtener una sola Tarea
router.get("/tasks/:id", obteniendoUnaTarea);

//  Crear una Tarea
router.post("/tasks", validacionesTasks, validacionDeError, creandoUnaTarea);

//  Actualizar todos los campos de una Tarea
router.put(
  "/tasks/:id",
  validacionesTasks,
  validacionDeError,
  actualizandoUnaTarea
);

//  Actualizar un campo en especifico de una Tarea
router.patch(
  "/tasks/:id",
  validacionesTasks,
  validacionDeError,
  actualizarUnCampo
);

//  Eliminar una Tarea
router.delete("/tasks/:id", eliminandoUnaTarea);

export default router;
