const express = require("express");
const { getTodo, getTodos, createTodo, deleteTodo, updateTodo } = require("../../controllers/todo/todoController");

const router = express.Router();

router.get("/", getTodos )

router.post("/" , createTodo)

router.get("/:id", getTodo)

router.delete("/:id", deleteTodo)

router.put("/:id", updateTodo)

module.exports = router;