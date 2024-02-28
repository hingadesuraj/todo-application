const mongoose = require('mongoose');

const URL = "mongodb+srv://firstdata:firstdata@cluster0.tk9trpp.mongodb.net/backend_todo"

const connnectToDb= async ()=>{
  await  mongoose.connect(URL).then(()=>console.log("database is connected")).catch((error)=>console.log(error.message))
}

module.exports = connnectToDb