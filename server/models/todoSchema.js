const mongoose = require('mongoose');
const { string } = require('zod');

const todoSchema = mongoose.Schema({
    title:String,
    description:String
})


const Todo = mongoose.model('Todo',todoSchema);


module.exports = Todo