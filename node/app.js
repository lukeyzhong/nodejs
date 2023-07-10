const http = require('http');

// const port = 3002;

const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        // res.write('hello')
        res.write('<h1 style="color: red">hello<h1>')
    }
    if (req.url === '/todo') {
        res.write('<h1 style="color: blue">hello<h1>')
    }
    res.end();
})

// server.listen(port, () => {
//     console.log(`listening on port ${port}...`);
// });

module.exports = server;