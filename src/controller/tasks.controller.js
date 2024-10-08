//Importamos la conexión de la base de datos
import connection_db from "../../db.js"; // const {connection_db} = require("../../db");

//Prueba para verificar la conexión a la base de datos
export const Pong = async (req, res) => {
  const result = await connection_db.query("SELECT 1 + 1 AS result");
  res.json(result[0]);
};

//      Obtener todas las Tareas
export const obteniendoTareas = async (req, res) => {
  try {
    const [rows] = await connection_db.query("SELECT * FROM tasks");
    res.send(rows);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something has gone wrong in obtaining" });
  }
};

//      Obtener una sola Tarea
export const obteniendoUnaTarea = async (req, res) => {
  try {
    const [rows] = await connection_db.query(
      "SELECT * FROM tasks WHERE id = ?",
      [req.params.id]
    );

    if (rows.length == 0) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something has gone wrong when obtaining a task" });
  }
};

//      Crear una Tarea
export const creandoUnaTarea = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;
    const [rows] = await connection_db.query(
      "INSERT INTO tasks (title, description, isComplete) VALUES (?,?,?)",
      [title, description, isComplete]
    );
    res.status(201).send({
      id: rows.insertId,
      title,
      description,
      isComplete,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something has gone wrong in creating" });
  }
};

//      Actualizar todos los campos de una Tarea
export const actualizandoUnaTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;

    const [result] = await connection_db.query(
      "UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?",
      [title, description, isComplete, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    const [rows] = await connection_db.query(
      "SELECT * FROM tasks WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something has gone wrong when update" });
  }
};

//      Actualizar un campo en especifico de una Tarea
export const actualizarUnCampo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;

    const [result] = await connection_db.query(
      "UPDATE tasks SET title = IFNULL(?, title), description = IFNULL(?, description), isComplete = IFNULL(?, isComplete) WHERE id = ?",
      [title, description, isComplete, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    const [rows] = await connection_db.query(
      "SELECT * FROM tasks WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something has gone wrong updating a field" });
  }
};

//      Eliminar una Tarea
export const eliminandoUnaTarea = async (req, res) => {
  try {
    const [result] = await connection_db.query(
      "DELETE FROM tasks WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Task Not Found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something has gone wrong when removing" });
  }
};
