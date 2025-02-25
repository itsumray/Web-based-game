const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('New player connected');
    socket.on('disconnect', () => console.log('Player disconnected'));
});

server.listen(3000, () => console.log('Server running on port 3000'));
