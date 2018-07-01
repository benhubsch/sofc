const io = require('socket.io')();

io.on('connection', socket => {
  console.log(`Socket connected: ${socket.id}`);
  socket.on('action', action => {
    console.log('ACTION', action);
    socket.broadcast.emit('action', action);
  });
});

module.exports = io;
