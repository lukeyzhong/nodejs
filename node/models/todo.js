const mongoose  = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId: Number,
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    }
});

// use an instance to connect the database
const Todo = mongoose.model('todo', todoSchema);

module.exports.Todo = Todo;
