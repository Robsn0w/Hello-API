const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.json({message: 'Hello World!'})
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:3000')
})