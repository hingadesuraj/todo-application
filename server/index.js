const express = require("express");
const cors = require("cors");
const connnectToDb = require("./db");
const zod = require("zod");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
connnectToDb();

app.get("/", (req, res) => {
  res.send("Server is working.....!");
});
 
app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server is running on " + "http://localhost:3000");
});
