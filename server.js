const path = require('path');
const express = require('express');

const app = express();
const api = require('./backend/routes');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.sendFile('/index.html'); // For React/Redux
});

app.use('/programming', api);
