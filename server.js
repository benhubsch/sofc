const models = require('./server/db/models');
const app = require('./app');
const io = require('./io');
const server = require('http').Server(app); // eslint-disable-line import/order

const PORT = process.env.PORT || 3000;

/* eslint-disable no-console */
models.sequelize.sync({ force: true }).then(() => {
  server.listen(
    PORT,
    error =>
      error
        ? console.log(error)
        : console.log(
            `==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
          )
  );

  io.attach(server);
});
/* eslint-enable no-console */
