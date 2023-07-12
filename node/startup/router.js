
const todos = require('../router/todos');

module.exports = function(app) {
    app.use('/todos', todos)
}