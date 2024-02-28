const express = require("express");
const cors = require("cors");
const connnectToDb = require("./db");
const zod = require("zod");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./models/todoSchema");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
connnectToDb();

app.get("/", (req, res) => {
  res.send("Server is working.....!");
});

// import zod schema

app.post("/todo", async (req, res) => {
  const { success } = createTodo.safeParse(req.body);
  if (!success) {
    res.status(200).json({ message: "Please follow validation" });
  }
  const todoData = {
    title: req.body.title,
    description: req.body.description,
    complete : req.body.complete
  };

  const save = await Todo.create(todoData);

  const todoId = save._id;

  res.status(200).json({ message: "Todo Created Successfull", todoId });
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
  } catch (error) {
    res.status(403).json({ message: "Todos are not found " });
  }
});


// update todo

app.put("/completed", (req, res) => {
  // validate data using zod schema
  const { success } = updateTodo.safeParse(req.body);

  if (!success) {
    res.status(411).json({ message: "You are sending wrong  inputs" });
  }
});


// delete todo

app.delete("/todo/:id",async (req,res)=>{
    const todoId = req.params.id
    try {
        const findTodo = await Todo.findByIdAndDelete(todoId);
        res.status(200).json({message:"Todo has been deleted from backend",findTodo})
    } catch (error) {
        res.status(411).json({message:"Todo can not be deleted...!"})
    }
})

app.listen(PORT, () => {
  console.log("Server is running on " + "http://localhost:3000");
});
