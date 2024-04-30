const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200', // Especifica el origen exacto permitido
    methods: ['GET', 'POST'], // Especifica los métodos permitidos (opcional)
    allowedHeaders: ['Content-Type'], // Especifica los encabezados permitidos (opcional)
    credentials: true // Permite credenciales en las solicitudes (si es necesario)
  }
});

io.on('connection', (socket) => {
  if (io.sockets.sockets.length > 1) {
    // Si se ha alcanzado el límite, cierra la conexión del nuevo socket
    console.log('Se ha alcanzado el límite de conexiones. Se rechaza una nueva conexión.');
    socket.disconnect(true);
    return;
  }
  console.log('user connected');
  // Escuchar el evento 'new-message'
  socket.on('new-message', (message) => {
    console.log('new message:', message);
    // Emitir el mensaje a todos los clientes conectados
    io.emit('new-message', message);
  });

  // Manejar la desconexión del usuario
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server listening on port 3000');
});
