const express = require("express");
const cors = require("cors");
const connnectToDb = require("./db");
const zod = require("zod");
const { createTodo } = require("./types");
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
    const {success} = createTodo.safeParse(req.body);
    if(!success){
        res.status(200).json({message:"Please follow validation"})

    }
    const todoData = {
        title:req.body.title,
        description:req.body.description
    }

    const save = await Todo.create(todoData);

    const todoId = save._id

    res.status(200).json({message:"Todo Created Successfull",todoId})

});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server is running on " + "http://localhost:3000");
});
