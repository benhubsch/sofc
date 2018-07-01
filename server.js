const app = require('./app');
const io = require('./io');
const server = require('http').Server(app); // eslint-disable-line

const PORT = process.env.PORT || 3000;

/* eslint-disable */
server.listen(
  PORT,
  error =>
    error
      ? console.error(error)
      : console.info(
          `==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
        )
);
/* eslint-enable */

io.attach(server);
