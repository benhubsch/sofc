const io = require('socket.io')();

io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`);
  socket.on('action', action => {
    // do a write to db here
    socket.broadcast.emit('action', { ...action, ...{ isEmitted: true } });
  });
});

module.exports = io;
