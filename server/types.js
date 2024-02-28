const zod = require('zod');


const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    // id:zod.string(),
    title:zod.string(),
    description:zod.string(),
    complete:zod.boolean()
})


module.exports = {
    createTodo,
    updateTodo
}