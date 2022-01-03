const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(console.log('Dockerizing a nodejs application!'));
})

app.listen(3000, () => {
    console.log('Application server running on port 3000.');
})