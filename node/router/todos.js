const express = require('express');
const router = express.Router();
const {todos} = require('../data/todolist');

const {Todo} = require('../models/todo')

router.get('/', async (req, res) => {

    const todos = await Todo.find();

    res.send(todos);
})

// router.post('/', (req, res) => {
//     todos.push(req.body);
//     // console.log(req.body);
//     return res.send('hello');
// })

module.exports = router;