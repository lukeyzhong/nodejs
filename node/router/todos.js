const express = require('express');
const router = express.Router();
const {todos} = require('../data/todolist');


router.get('/', (req, res) => {
    res.send(todos);
})

router.post('/', (req, res) => {
    todos.push(req.body);
    // console.log(req.body);
    return res.send('hello');
})

module.exports = router;