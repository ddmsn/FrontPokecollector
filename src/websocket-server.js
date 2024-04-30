const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('message', (message) => {
    console.log('Mensaje recibido:', message);
    io.emit('message', message); // Enviar el mensaje a todos los clientes
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

http.listen(8081, () => {
  console.log('Servidor Socket.IO escuchando en el puerto 8081');
});
