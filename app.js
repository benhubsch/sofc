const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./server/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile('/index.html'); // For React/Redux
});

app.use('/api', api);

module.exports = app;
