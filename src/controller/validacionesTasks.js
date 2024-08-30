import { body } from "express-validator";

const validacionesTasks = [
  body("title")
    .isString()
    .withMessage("El título debe ser un texto")
    .notEmpty()
    .withMessage("El título no puede estar vacío"),
  body("description")
    .isString()
    .withMessage("La descripción debe ser un texto")
    .notEmpty()
    .withMessage("La descripción no puede estar vacía"),
];

export { validacionesTasks };
