const io = require('socket.io')();

io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`); // eslint-disable-line no-console
  socket.on('action', action => {
    socket.broadcast.emit('action', { ...action, ...{ isEmitted: true } });
  });
});

module.exports = io;
