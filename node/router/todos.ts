const express = require('express');
const router = express.Router();
const {todos} = require('../data/todolist');


router.get('/todos', (req, res) => {
    res.send(todos);
})

router.post('/todos', (req, res) => {
    todos.push(req.body);
    // console.log(req.body);
    return res.send('hello');
})