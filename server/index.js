const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Server is working.....!")
})



app.listen(PORT,()=>{
    console.log("Server is running on "+"http://localhost:3000")
})