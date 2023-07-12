const express = require('express');
const app = express();
const port = 3002;

require('./startup/global.mw')(app);
require('./startup/db')();

require('./startup/router')(app);

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
