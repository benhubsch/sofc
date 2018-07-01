const express = require('express');
const path = require('path');
const api = require('./backend/routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile('/index.html'); // For React/Redux
});

app.use('/api', api);

module.exports = app;
