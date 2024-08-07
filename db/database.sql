CREATE DATABASE IF NOT EXISTS tasks_db;

CREATE TABLE tasks (
    "id" INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "isComplete" BOOLEAN NOT NULL DEFAULT 0
);

