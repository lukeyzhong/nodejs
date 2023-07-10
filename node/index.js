const express = require('express');

const todos = require('./data/todolist.js')
const app = express();

const port = 3002;

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
