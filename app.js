const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('CI/CD demo - after the pipeline is built - Now add the manual review stage'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
