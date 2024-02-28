const mongoose = require('mongoose');
const { string, boolean } = require('zod');

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    complete:Boolean
})


const Todo = mongoose.model('Todo',todoSchema);


module.exports = Todo